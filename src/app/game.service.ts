import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './apiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentQuestion: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et earum at voluptatem,  nulla aliquam odit sunt repellat totam quod mollitia quam in rem nesciunt rerum exercitationem dolorem. Placeat, repudiandae!"

  answerOptions:string[]=[
    "Opcion 1",
    "Opcion 2",
    "Opcion 3",
    "Opcion 4"
  ]

  correctAnswer:string ="Opcion 3"
  userService:UserService
  httpClient:HttpClient
  constructor(userService: UserService,httpClient: HttpClient) { 
    this.userService= userService
    this.httpClient = httpClient
  }



  async getTriviaQuestion():Promise<ApiResponse>{
    console.log(this.userService.token,this.userService.userName)
    const data = await this.httpClient.get("http://localhost:4001/questions/single",{headers:{user: this.userService.userName,"access-token": this.userService.token}}).toPromise();
    const response = JSON.parse(JSON.stringify(data))
    return{status:response.status,message:response.message,data:response.data}
  }
  async setNewTriviaQuestion(){
    const response = await this.getTriviaQuestion()
    console.log(response)
    this.currentQuestion= response.data.question.question
    this.answerOptions= response.data.question.answers
    this.correctAnswer= response.data.question.correctAnswer
  }
  sendUserResponse(question:string,answer:string){
    this.httpClient.post("http://localhost:4001/questions/response",
    {question:question,answer:answer},
    {headers:{user: this.userService.userName,"access-token": this.userService.token}
  }).toPromise()
}
}
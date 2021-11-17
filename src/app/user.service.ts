import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string = ""
  httpClient:HttpClient
  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient
   }

  createRegisterRequest(name: string, password:string){
    this.httpClient.post("http://localhost:4035/players/register",{name,password}).subscribe((data:any)=>{
      console.log(data)
    })
  }

  createUserName(name: string, password:string){
    this.userName = name
    this.createRegisterRequest(name, password)
    console.log("Aqui cambio", this.userName)
    localStorage.setItem("userName", this.userName)
  }

  checkLoginUser():boolean{
    const name = localStorage.getItem("userName")
    if (name != null){
      this.userName = name
      return true
    }
    else{
      return false
    }
  }

  signOut(){
    this.userName = ""
    localStorage.removeItem("userName")
  }
}
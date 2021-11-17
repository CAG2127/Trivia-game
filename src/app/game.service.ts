import { Injectable } from '@angular/core';

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

  constructor() { }
}
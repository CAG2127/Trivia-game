import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  userService:UserService
  router: Router
  gameService:GameService
  correctAnswer:number=-1
  constructor(service: UserService, router:Router, gameService:GameService) {
    this.userService = service
    this.router = router
    this.gameService = gameService
  }

  ngOnInit(): void {
  }

  signOut(){
    this.userService.signOut()
    this.router.navigateByUrl("/login")
  }

  selectAnswer(answer:string){
    console.log(answer)
    if(answer==this.gameService.correctAnswer){
      this.correctAnswer=1
    }else{
      this.correctAnswer = 0
    }

  }

  nextQuestion(){
    this.correctAnswer=-1
  }

  gotoLeaderBoard(){
    this.router.navigateByUrl('/score')
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {

  userService:UserService
  router: Router
  scoreService: ScoreService
  constructor(router:Router, userService:UserService, scoreService:ScoreService) {
    this.userService = userService
    this.scoreService = scoreService
    this.router = router
  }
  
  ngOnInit(): void {
  }

  returnGame(){
    this.router.navigateByUrl('/game')
  }

  signOut(){
    this.userService.signOut()
    this.router.navigateByUrl("/login")
  }

}
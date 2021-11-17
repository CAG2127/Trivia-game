import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  userService: UserService
  router: Router
  constructor(userService: UserService, router: Router) {
    this.userService = userService
    this.router = router
  }

  ngOnInit(): void{
    const isLogin: boolean = this.userService.checkLoginUser()
    if (isLogin == true){
      this.router.navigateByUrl('/game')
    }
  }

  userName = ""
  userPassword = ""
  onUserNameCreate(){
    if (this.userName === "" || this.userPassword==""){
      alert("El nombre y password no debe estar vacio.")
      return
    }
    this.userService.createUserName(this.userName, this.userPassword)
    this.router.navigateByUrl('/game')
  }

  isLoggedIn(){
    const userName = localStorage.getItem("userName")
    if (userName != null){
     // this.userService.createUserName(this.userName)
      this.router.navigateByUrl('/game')
    }
  }

}
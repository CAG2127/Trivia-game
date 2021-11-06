import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
userService: UserService
  constructor(userService: UserService) { this.userService = userService}



  userName = ""
  
  onUserNameCreate(){
    this.userService.createUserName(this.userName)
  }

}

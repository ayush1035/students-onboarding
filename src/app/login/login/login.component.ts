import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {LoginService} from '../shared/login.service';
import {Router} from "@angular/router"
import * as constants from '../shared/constants'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new User('',''); // at first username and password will be empty.
  errorMessage = '';

  constructor(private loginService: LoginService,private router: Router) { } // initializing the Login service and router

  ngOnInit() {
  }

  /**
   * 
   * @param event (event triggered on clicking the signin button)
   */
  onSubmit(event){
    if(this.loginService.verifyUser(this.userModel)){
      //if the credentials match we will route to landing page
      this.router.navigate(['/student-onboard'])
    }
    else{
      //if the credentials do not match we will dispay an error message on the screen
      this.errorMessage =constants.ERROR_MESSAGE ;
    }
  }



}

import { Injectable } from '@angular/core';
import {User} from './user';
import * as constants from './constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  /**
   * 
   * @param user User that needs to be verified
   * function to verify if the username or password is correct
   */
  verifyUser (user:User):boolean {
    if(user.username === constants.USERNAME && user.password === constants.PASSWORD) //if username and password matches
    {
      localStorage.setItem('username',user.username); // setting the username in the localStorage
      return true;
    }
    else
    return false; // if the username and password does not match
  } 
}

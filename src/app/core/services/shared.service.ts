import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  /**
   * function to make the user logout
   */
  logout(){
    this.isLoggedIn.next(false)
    localStorage.removeItem('username');
  }

  login(){
    this.isLoggedIn.next(true)
  }

  /**
   * function to check id user is logged in or not
   */
  checkLogin(){
    if(localStorage.getItem('username'))
    {
      this.isLoggedIn.next(true)
      return true;
    }
    return false;
  }
}

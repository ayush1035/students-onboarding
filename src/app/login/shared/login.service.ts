import { Injectable } from '@angular/core';
import {User} from './user';
import * as constants from './constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  verifyUser (user:User):boolean {
    if(user.username === constants.USERNAME && user.password === constants.PASSWORD)
    return true;
    else
    return false;
  }
}

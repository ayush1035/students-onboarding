import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {SharedService} from '../services/shared.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router,private sharedService:SharedService) { } // initializing the router

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.sharedService.checkLogin()) {
        return true; // allow the access of the page
    }
    else
    {
      this._router.navigate(['/login']); // redirect to login page
    }
  }
}

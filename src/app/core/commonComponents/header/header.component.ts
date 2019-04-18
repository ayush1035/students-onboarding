import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = 'Ayush';

  constructor(public service:SharedService,private router:Router) { }

  ngOnInit() {
  }

  logout(){

    this.service.logout();
    this.router.navigate(['/login'])

  }

}

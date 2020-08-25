import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {LoginComponent} from './signin/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToLogin() {
  	this.router.navigate(['login'])
  }
  routeToHome()
  {
    this.router.navigate([''])
  }
  
}

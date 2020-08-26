import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {SigninModule} from 'src/app/signin/signin.module';
import { RouterService } from 'src/app/router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService, private routerService: RouterService,private router:Router) { }

  ngOnInit() {
  }
  trending()
  {
    // console.log("Trending clicked");
    this.dataService.getTrendingGifs();
    this.routerService.routeToHome();

  }
  login()
  {
    console.log("login clicked");
    this.routerService.routeToLogin();
  }
  favourites()
  {
    this.router.navigate(['favourites'])
  }
  logout()
  {
    this.routerService.routeToHome();
    console.log("logout");
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    
  }

}

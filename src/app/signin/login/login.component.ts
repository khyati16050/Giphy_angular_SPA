import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username : string;
password: string;
  constructor(private routerService:RouterService,private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  login(username,password)
  {
    if(username=="admin" && password=="pass" ||username=="admin" && password=="pass")
    {
      this.username = username;
      this.password = password;
      let flag = this.authenticationService.authenticateUser({username: this.username, password: this.password});
      if(flag)
      {
        this.authenticationService.setBearerToken('token');
        this.router.navigate(['favourites'])
      }
      

    }
    
  }

}

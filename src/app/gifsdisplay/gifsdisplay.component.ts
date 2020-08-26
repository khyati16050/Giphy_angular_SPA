import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { RouterService } from 'src/app/router.service';
import {Gifs} from 'src/app/gifs';
import {GifsService} from 'src/app/gifs.service'
import {AuthenticationService} from 'src/app/authentication.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-gifsdisplay',
  templateUrl: './gifsdisplay.component.html',
  styleUrls: ['./gifsdisplay.component.css']
})
export class GifsdisplayComponent implements OnInit {

  gifs: any[] = [];
  public gif:Gifs;
  public gifList: Gifs[] = [];
  constructor(private dataService : DataService,private router: Router,private gifsService : GifsService,private routerService: RouterService) { 
    this.gif = new Gifs();
  }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.dataService.getGifs().subscribe((response: any) => {
      
        this.gifs = response;
    });
    // 
    
    
  }
  addFav(val)
  {
    if(localStorage.getItem('token')!=null)  
    {         
      this.gif.url = val;
      var user  = localStorage.getItem('username');
      // console.log("user",user);
      this.gif.username = user;
      // console.log("gif",this.gif);
      this.gifsService.addFav(this.gif).subscribe(data => {
        this.gifList.push(data);
      });
      this.gif = new Gifs();
    }
    else{
      console.log("not");
      this.routerService.routeToLogin();
    }
   
    
  }

}

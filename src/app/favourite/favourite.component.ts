import { Component, OnInit } from '@angular/core';
import {Gifs} from 'src/app/gifs';
import {GifsService} from 'src/app/gifs.service'

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
public gif:Gifs;
public gifList: Gifs[] = [];

  constructor(private gifsService : GifsService) { 
    this.gif = new Gifs(); 
  }

  ngOnInit() {
    this.gifsService.getFav().subscribe(data => {
      var user = localStorage.getItem('username');
      data.forEach(element => {
        if(element.username == user)
        this.gifList.push(element);
      });
      
      
        // this.gifList = data;
    });
  }
  
  delete(gif)
  {
    this.gif = gif;
   
    this.gifsService.deleteFav(this.gif).subscribe(data => {
      this.gifList.splice(this.gif.id-1,1);
  });
  this.gif = new Gifs();
  
  
   
  }}




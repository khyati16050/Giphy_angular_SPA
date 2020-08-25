import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { RouterService } from 'src/app/router.service';
import {Gifs} from 'src/app/gifs';
import {GifsService} from 'src/app/gifs.service'

@Component({
  selector: 'app-gifsdisplay',
  templateUrl: './gifsdisplay.component.html',
  styleUrls: ['./gifsdisplay.component.css']
})
export class GifsdisplayComponent implements OnInit {

  gifs: any[] = [];
  public gif:Gifs;
  public gifList: Gifs[] = [];
  constructor(private dataService : DataService,private routerService: RouterService,private gifsService : GifsService) { 
    this.gif = new Gifs();
  }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.dataService.getGifs().subscribe((response: any) => {
        this.gifs = response;
    });
    // this.routerService.routeToHome();
    
    
  }
  addFav(val)
  {
    this.gif.url = val;
    this.gifsService.addFav(this.gif).subscribe(data => {
      this.gifList.push(data);
    });
    this.gif = new Gifs();
    
  }

}

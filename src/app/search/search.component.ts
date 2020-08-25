import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { RouterService } from 'src/app/router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public term: string;
  constructor(private dataService : DataService, private routerService:RouterService,private router:Router) { }
  
  ngOnInit() {
  }
  search(term)
  {
    if(term!=null && term!='')
    {
      console.log(term);
      this.dataService.searchGifs(term);
      this.routerService.routeToHome();
      

    }
  }

}

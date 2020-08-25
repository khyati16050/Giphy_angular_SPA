import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userinput : string;
  public gifs = new BehaviorSubject<any>([]);
  constructor(private http : HttpClient)  
  {

  }
  getTrendingGifs()
  {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apikey}&limit=32`).subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  searchGifs(userinput)
  {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${userinput}&api_key=${environment.apikey}&limit=32`).subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  getGifs()
  {
    return this.gifs.asObservable();
  }
}

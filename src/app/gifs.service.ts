import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gifs } from './gifs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private gifs_api_url: string = 'http://localhost:3000/fav';

  constructor(private httpClient: HttpClient) {

  }


  getFav(): Observable<Gifs[]> 
  {
    return this.httpClient.get<Gifs[]>(this.gifs_api_url);

  }

  addFav(gif: Gifs): Observable<Gifs> {
    return this.httpClient.post<Gifs>(this.gifs_api_url, gif);

  }
  deleteFav(gif: Gifs): Observable<Gifs> 
  {
      const key = "id";
      return this.httpClient.delete(this.gifs_api_url+'/'+gif[key]);
  }

}

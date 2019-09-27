import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Movie, MovieDetail } from '../types';
import { imdbApiUrl } from '../imdbApi';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private http: Http) { }

  async search(title:string,type:string):Promise<Movie[]> {
    let response = await this.http.get(`${imdbApiUrl}s=${title}&t=${type}`).toPromise()

    return response.json().Search
  }

  async get(imdbId:string):Promise<MovieDetail> {
    let response = await this.http.get(`${imdbApiUrl}i=${imdbId}`).toPromise()

    return response.json()

  }
}

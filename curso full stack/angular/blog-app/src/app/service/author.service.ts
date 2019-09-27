import { Injectable } from '@angular/core';
import { Author } from '../types';
import { Http } from '@angular/http';
import {endpointApiAddress} from './endpoint-api-address'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:Http) { }

  listAll():Promise<Author[]> {
    return new Promise(async (resolve,reject) => {
      let response = await this.http.get(`${endpointApiAddress}/authors`).toPromise()

      resolve(response.json())
    })
  }
}

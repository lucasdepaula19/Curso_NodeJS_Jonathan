import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { endpointApiAddress } from './endpoint-api-address'
import { Post } from '../types/Post';
import { Comment } from '../types';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  public likesStream: Subject<void> = new Subject()

  lastNumberOfLikesPerPost: any = {}
  stopWatching = false


  listAll(): Promise<Post[]> {
    return new Promise(async (resolve, reject) => {
      let response = await this.http.get(`${endpointApiAddress}/posts`).toPromise()

      if (response.status == 200) {
        resolve(response.json())
      } else {
        reject()
      }
    })
  }

  get(postId: string): Promise<Post> {
    return new Promise(async (resolve, reject) => {
      let filter = {
        include: ['author']
      }
      let response = await this.http.get(`${endpointApiAddress}/posts/${postId}?filter=${JSON.stringify(filter)}`).toPromise()

      if (response.status == 200) {
        resolve(response.json())
      } else {
        reject()
      }
    })
  }

  async save(post: Post): Promise<void> {
    let response = await this.http.post(`${endpointApiAddress}/posts`, post).toPromise()

    if (response.status == 200) {
      return response.json()
    } else {
      throw new Error(response.text())
    }
  }

  async saveComment(postId: string, comment: Comment) {
    await this.http.post(`${endpointApiAddress}/posts/${postId}/comments`, comment).toPromise()
  }

  async like(postId: string) {
    await this.http.post(`${endpointApiAddress}/posts/${postId}/like`, {}).toPromise()
  }

  async getNumberOfLikes(postId: string) {
    let filter = {
      fields: ['likes']
    }
    let response = await this.http.get(`${endpointApiAddress}/posts/${postId}?filter=${JSON.stringify(filter)}`).toPromise()

    if (response.json() && response.json().likes) {
      return response.json().likes
    }

    return null
  }

  async startWatchingLikes(postId: string, lastNumberOfLikes?: number,firstExecution:boolean = false) {

    if (firstExecution) {
      this.stopWatching = false
    }

    if (lastNumberOfLikes) {
      this.lastNumberOfLikesPerPost[postId] = lastNumberOfLikes
    }


    let currentNumberOfLikes = await this.getNumberOfLikes(postId)

    if (currentNumberOfLikes != this.lastNumberOfLikesPerPost[postId]) {
      console.log("ATUALIZANDO")
      this.likesStream.next()
    } else {
      console.log("NADA SERÁ ATUALIZADO")
    }

    if (!this.stopWatching) {
      setTimeout(() => this.startWatchingLikes(postId), 2000)
    }
  }

  async stopWatchingLikes() {
    this.stopWatching = true
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/types/Post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit, OnDestroy {


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  post: Post
  currentPostId: string

  ngOnInit() {
    this.post = {
      author: {}
    }

    this.activatedRoute.params.subscribe(async params => {
      this.currentPostId = params['postId']
      this.post = await this.postService.get(this.currentPostId)

      this.postService.startWatchingLikes(this.post.id,this.post.likes,true)

      this.postService.likesStream.subscribe(async () => {
        this.post = await this.postService.get(this.currentPostId)
        this.postService.startWatchingLikes(this.post.id,this.post.likes,true)
      })
    })



  }

  ngOnDestroy(): void {
    console.log("destruindo view-post")

    this.postService.likesStream.unsubscribe()
    this.postService.stopWatchingLikes()
  }

  async commentSaved() {
    this.post = await this.postService.get(this.currentPostId)
  }

  async like() {
    await this.postService.like(this.post.id)
  }


}

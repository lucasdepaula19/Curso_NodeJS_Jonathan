import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[]

  ngOnInit() {
    this.updatePosts()
  }

  async updatePosts() {
    this.posts = await this.postService.listAll()

  }

}

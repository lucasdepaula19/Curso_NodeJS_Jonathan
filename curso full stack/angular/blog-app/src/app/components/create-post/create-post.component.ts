import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { Author, Post } from 'src/app/types';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private authorService:AuthorService,private postService:PostService,private router: Router) { }

  authors:Author[]
  post:Post

  async ngOnInit() {
    this.post = {}
    this.authors = await this.authorService.listAll()
  }

  async save() {
    try {
      await this.postService.save(this.post)

      this.router.navigate(['/posts'])
    } catch (error) {
      console.error(`falha ao salvar o post`,error)
      alert('Failed')
    }
  }

}

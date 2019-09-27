import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comment } from 'src/app/types';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(private postService:PostService) { }

  @Input()
  postId:string

  @Output()
  commentSaved = new EventEmitter()

  comment:Comment

  ngOnInit() {
    this.comment = {}
  }

  async save() {
    await this.postService.saveComment(this.postId,this.comment)

    this.comment = {}

    this.commentSaved.emit()

  }

}

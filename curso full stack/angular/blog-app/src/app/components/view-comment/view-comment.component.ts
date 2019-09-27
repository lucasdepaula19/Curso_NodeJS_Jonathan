import { Component, OnInit, Input } from '@angular/core';
import { Comment } from "../../types";

@Component({
  selector: 'view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  constructor() { }

  @Input()
  comment:Comment

  ngOnInit() {
  }

  

}

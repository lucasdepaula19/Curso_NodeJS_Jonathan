import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './service/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostPhotoUrlPipe } from './pipes/post-photo-url.pipe';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {FormsModule} from '@angular/forms';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    ViewPostComponent,
    PostPhotoUrlPipe,
    CreatePostComponent,
    ViewCommentComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

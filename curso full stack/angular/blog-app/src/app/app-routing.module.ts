import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'home', component: HomeComponent},
  {path:'view-post/:postId',component: ViewPostComponent},
  {path: 'create-post',component: CreatePostComponent},
  {path: '',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

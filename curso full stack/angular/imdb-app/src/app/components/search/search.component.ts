import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import { Movie } from 'src/app/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private imdbService: ImdbService) { }

  title:string
  type: string

  movieList:Movie[]

  ngOnInit() {
  }

  async search() {
    this.movieList = await this.imdbService.search(this.title,this.type)
  }

}

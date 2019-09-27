import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbService } from 'src/app/services/imdb.service';
import { MovieDetail } from 'src/app/types';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private imdbService: ImdbService) { }

  imdbId:string
  movieDetail:MovieDetail

  async ngOnInit() {
    this.movieDetail = {}
    
    this.activatedRoute.params.subscribe(async params => {
      this.imdbId = params['imdbId']

      this.movieDetail = await this.imdbService.get(this.imdbId)
    })
  }

}

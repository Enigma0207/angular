import { Component, OnInit, Input } from '@angular/core';
import { withNoDomReuse } from '@angular/platform-browser';
import { Movie } from '../models/movie.model' // comment on l'a importé?
import { MovieService } from '../movieservice';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(private serviceMovie: MovieService){}
  @Input () movie!:  Movie;
  likez() {
    if (this.movie.licked == true) {
      this.movie.lickes--;
      this.movie.licked = false;
    }
    else {
       this.movie.lickes++;
      this.movie.licked = true;
    }
  }
  remove() {
   const index = this.serviceMovie.movies.findIndex((film) => film.id === this.movie.id);
    if (index !== -1) {
      this.serviceMovie.movies.splice(index, 1);}
  }
  }


import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model' // comment on l'a importé?


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
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
}

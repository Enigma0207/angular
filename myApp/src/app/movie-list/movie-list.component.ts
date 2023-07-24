import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movieservice';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies!: Movie[];
  constructor(private serviceMovie: MovieService) {
    this.movies = this.serviceMovie.movies;
  // }
  //  movie2!: Movie;
  // ngOnInit(): void {
    

  }
}

import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movies!: Movie[];
    constructor() { 
        this.movies = [
          new Movie(
        1,
        "produit de luxe",
        "un produit pour la beauté des femmes, recommandé à toutes les femmes du monde qui veulent...",
        "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg",
        0,
        false
      ),
          new Movie(
        2,
        "action sur action",
        "film pour moins de 18ans...",
        "https://img.freepik.com/photos-premium/image-galaxie-coloree-dans-ciel-ai-generative_791316-9864.jpg?w=2000",
        0,
        false
      )
    ]
  
    }
}
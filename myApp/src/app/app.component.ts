import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  couleur = "yellow";
  laDate = new Date()
}

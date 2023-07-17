import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  titre!: string;
  description!: string;
  urlImage!: string;
  like!: string;
  ngOnInit(): void{
    this.titre = "produit de luxe";
    this.description = "un produit pour la beauté des femmes, recommandé à toutes les femmes du monde qui veulent..."
    this.urlImage = "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
    this.like="10 like"
  }

}

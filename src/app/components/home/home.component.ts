import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private rYmService: RickAndMortyService) {}
  listaImagenesPersonajes:string[] = [];
  primeraImagenesPersonajes:string = '';

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.rYmService.obtenerPersonajes().subscribe((data) => {
      for(let personaje in data.results){
        this.listaImagenesPersonajes.push(data.results[personaje].image);
      }
      this.primeraImagenesPersonajes=this.listaImagenesPersonajes[0];
    });
  }

}

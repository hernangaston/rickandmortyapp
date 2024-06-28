import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Episodio } from '../../interfaces/episodio';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lista-episodios',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista-episodios.component.html',
  styleUrl: './lista-episodios.component.css'
})
export class ListaEpisodiosComponent implements OnInit {
  listaEpisodios: Episodio[] = [];

  constructor(private rYmService: RickAndMortyService) { 
    
  }

  ngOnInit(): void {
    this.buscoEpisodios();
  }

  buscoEpisodios() {
    this.rYmService.obtenerEpisodios().subscribe((data) => {
      this.listaEpisodios = data.results;
      console.log(this.listaEpisodios);
    });
  }

}
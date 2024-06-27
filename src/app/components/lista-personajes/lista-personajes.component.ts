import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { NgFor, NgIf } from '@angular/common';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})


export class ListaPersonajesComponent implements OnInit {
  listaPersonajes: Personaje[] = [];
  nextPage: string = '';
  prevPage: string = '';
  constructor(private rYmService: RickAndMortyService) { 
    
  }

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.rYmService.obtenerPersonajes().subscribe((data) => {
      this.actualizaPropiedades(data);
      console.log(data);
    });
  }

  irA(pagina: string) {
    this.rYmService.irAPagina(pagina).subscribe(data => {
      this.actualizaPropiedades(data);
    })
  }

  actualizaPropiedades(data: any) {
    this.listaPersonajes = data.results;
    this.nextPage = data.info.next;
    this.nextPage = '?' + this.nextPage.split('?')[1];
    if (data.info.prev != null) {
      this.prevPage = data.info.prev;
      this.prevPage = '?' + this.prevPage.split('?')[1];
    }
  }

}

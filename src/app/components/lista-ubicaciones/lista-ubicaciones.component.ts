import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Ubicacion } from '../../interfaces/ubicacion';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lista-ubicaciones',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista-ubicaciones.component.html',
  styleUrl: './lista-ubicaciones.component.css'
})


export class ListaUbicacionesComponent implements OnInit {
  listaLugares: Ubicacion[] = [];

  constructor(private rYmService: RickAndMortyService) { 
    
  }

  ngOnInit(): void {
    this.buscoLugares();
  }

  buscoLugares() {
    this.rYmService.obtenerLugares().subscribe((data) => {
      this.listaLugares = data.results;
      console.log(this.listaLugares);
    });
  }

}

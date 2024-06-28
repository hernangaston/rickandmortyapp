import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

import { RickAndMortyService } from '../../services/rick-and-morty.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})

export class PersonajeComponent implements OnInit{
  id: string = '';  
  personaje!: Personaje;
  episodios: string[]=[];
  origen: string='';
  origen_url: string='';
  ubicacion: string='';
  ubicacion_url: string='';

  constructor(private rYmService: RickAndMortyService, private activatedRoute: ActivatedRoute) { 
      
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.buscoPersonaje(this.id);
  }

  buscoPersonaje(id:string) {
    this.rYmService.obtenerPersonaje(id).subscribe((data) => {
      this.personaje = data;
      this.origen = data.origin.name;
      this.origen_url = data.origin.url;
      this.ubicacion = data.location.name;
      this.ubicacion_url = data.location.url;

      this.personaje.episode.forEach(element => {
        this.episodios.push(element.split('/')[5]);
      });
    });
  }

}

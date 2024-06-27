import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from "./components/barra-navegacion/barra-navegacion.component";
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarraNavegacionComponent, ListaPersonajesComponent]
})
export class AppComponent implements OnInit{
  titleFather: string = 'Inicia'
  ngOnInit(): void {
    this.titleFather = 'Rick and Morty App';
    BarraNavegacionComponent.setTitle(this.titleFather);
    throw new Error('Method not implemented.');    
  }
  
}

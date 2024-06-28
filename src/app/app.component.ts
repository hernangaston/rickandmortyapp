import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from "./components/barra-navegacion/barra-navegacion.component";
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarraNavegacionComponent, ListaPersonajesComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
}

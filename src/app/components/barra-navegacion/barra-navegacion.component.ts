import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  static setTitle(title: string) {
    throw new Error('Method not implemented.');
  }
  title: string = 'Barra';
  setTitle(t:string):void{
    this.title=t;
  }
}

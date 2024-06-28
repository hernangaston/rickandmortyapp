import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  nextPage: string = '';
  prevPage: string = '';
  

  constructor(private rYmService: RickAndMortyService) { 
    
  }

  irA(data: any) {
    this.rYmService.irAPagina(data).subscribe(data => {
      this.actualizaPropiedades(data);
    })
  }

  actualizaPropiedades(data: any) {
    this.nextPage = data.info.next;
    this.nextPage = '?' + this.nextPage.split('?')[1];
    if (data.info.prev != null) {
      this.prevPage = data.info.prev;
      this.prevPage = '?' + this.prevPage.split('?')[1];
    }
  }

}

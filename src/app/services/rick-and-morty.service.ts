import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  obtenerPersonaje(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  irAPagina(page: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${page}`);
  }

}

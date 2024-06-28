import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  obtenerPersonaje(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  obtenerLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  obtenerEpisodios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode`);
  }

  irAPagina(page: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${page}`);
  }

}

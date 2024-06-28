import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ListaUbicacionesComponent } from './components/lista-ubicaciones/lista-ubicaciones.component';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
 
export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'personajes', component: ListaPersonajesComponent },
	{ path: 'personajes/:id', component: PersonajeComponent },
	{ path: 'ubicaciones', component: ListaUbicacionesComponent },
	{ path: 'episodios', component: ListaEpisodiosComponent }
];

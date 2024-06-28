import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AppComponent } from './app.component';
 
export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'personajes', component: ListaPersonajesComponent },
	{ path: 'personajes/:id', component: PersonajeComponent }
];

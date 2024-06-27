import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '/episodios',
        redirectTo: 'episodios',
        pathMatch: 'full'
    },
    {
        path: '/personajes',
        redirectTo: 'personajes',
        pathMatch: 'full'
    },
    {
        path: '/ubicaciones',
        redirectTo: 'ubicaciones',
        pathMatch: 'full'
    }
];

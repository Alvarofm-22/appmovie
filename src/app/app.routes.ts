import { Routes } from '@angular/router';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPopularComponent } from './pages/lista-popular/lista-popular.component';
import { TvPopularesComponent } from './pages/tv-populares/tv-populares.component';
import { DetallePeliculasComponent } from './pages/detalle-peliculas/detalle-peliculas.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutsComponent,
        children:[
            {
                path:'',
                component: HomeComponent
            },
            {
                path:'populares',
                component: ListaPopularComponent
            },
            {
                path:'tvPopulares',
                component: TvPopularesComponent
            },
            {
                path:'detalle/:id',
                component: DetallePeliculasComponent
            }
        ]
    }
];

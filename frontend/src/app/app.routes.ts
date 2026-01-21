import { Routes } from '@angular/router';
import { Gallery } from './components/gallery/gallery';
import { Home } from './components/home/home';
import { Details } from './details/details';
import { Edit } from './components/edit/edit';
import { Create } from './components/create/create';

export const routes: Routes = [
    {
        path : '',
        component : Home,
    },
    {
        path : 'page/:id',
        component : Gallery
    },
    {
        path: 'details/:id',
        component : Details
    },
    {
        path : 'edit/:id',
        component : Edit
    },
    {
        path : 'create',
        component : Create
    }
];

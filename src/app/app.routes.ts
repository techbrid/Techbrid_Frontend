import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path:'admin',
        loadChildren: () => import('./Layout/admin/admin-layout.module').then(m => m.AdminLayoutModule)
    },
    {
        path:'client',
        loadChildren: () => import('./Layout/client/client-layout-module').then(m => m.ClientLayoutModule)
    },
    {
        path:'',
        redirectTo:'admin',
        pathMatch : 'full'
    }
];

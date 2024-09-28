import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.layout.component';

const routes: Routes = [
  {
    path: '',component : AdminComponent,
    children: [
      {
        path: 'admin-dashboard',
       loadChildren: () => import('./components/dashboard/dashboard.component.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'admin-login',
      //   loadChildren: () => import('./components/admin-settings/admin-settings.module').then(m => m.AdminSettingsModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
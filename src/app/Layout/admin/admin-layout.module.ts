import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutingModule } from './admin-layout-routing.moduel';
import { AdminComponent } from './admin.layout.component';

@NgModule({
  declarations : [
    AdminComponent
  ],  
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
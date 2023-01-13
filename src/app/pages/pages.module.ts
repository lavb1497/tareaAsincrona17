import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    AppRoutingModule,
    RouterLinkActive
  ],
  exports: [
    HomeComponent,
    DetallesComponent
  ]
})
export class PagesModule { }

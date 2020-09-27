import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontComponent } from './assets/font/font.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'map', component: MapComponent },
  {path: 'font', component: FontComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

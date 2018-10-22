import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ServicesComponent } from '../components/services/services.component';
import { BreedsComponent } from '../components/breeds/breeds.component';
import { BlogComponent } from '../components/blog/blog.component';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'breeds', component: BreedsComponent},
  {path: 'blog', component: BlogComponent},
];

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LazyComponent } from './lazy/lazy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'lazy1', loadChildren: 'app/lazy.1/lazy.module#Lazy1Module' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

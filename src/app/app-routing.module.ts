import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortalReclamacionesComponent } from './portal-reclamaciones/portal-reclamaciones.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'incidencias', component: PortalReclamacionesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

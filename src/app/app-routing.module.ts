import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  { path: '**', redirectTo: 'login', pathMatch:'full' }
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  //CommonModule,
  exports:[RouterModule]
})
export class AppRoutingModule { }

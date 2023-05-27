import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentComponent } from './dashboard-pages/student/student.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent },
  {path:'students',component:StudentComponent},
  {path:'signup',component:SignupComponent},
  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'home', loadChildren: () => import('./dashboard-pages/dashboard-pages.module').then(m => m.DashboardPagesModule) }, // default route of the module
  { path: 'students',loadChildren:()=> import('./dashboard-pages/student/student.module').then(m=>m.StudentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

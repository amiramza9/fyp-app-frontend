import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardPagesComponent } from './dashboard-pages.component';
import { StudentComponent } from './student/student.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardPagesComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    DashboardPagesRoutingModule
  ],
  exports:[
    
  ]
})
export class DashboardPagesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './layout-components/nav/nav.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './dashboard-pages/student/student.component';
import { DashboardPagesComponent } from './dashboard-pages/dashboard-pages.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NormalLayoutComponent,
    DashboardLayoutComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [{
        path:"student", component:StudentComponent
      }

    ]
    ),
  ],
  exports:[ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RgisterComponent } from './components/rgister/rgister.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ExploreComponent } from './components/explore/explore.component';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RgisterComponent,
    SideNavComponent,
    ExploreComponent,
    UploadComponent,
    NavbarComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
  SideNavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

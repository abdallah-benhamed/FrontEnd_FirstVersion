import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RgisterComponent } from './components/rgister/rgister.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UploadComponent } from './components/upload/upload.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
{path:'',redirectTo:'login', pathMatch:'full'},
 {path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RgisterComponent},
{path:'sidenav',component:SideNavComponent},
{path:'upload',component:UploadComponent},
{path:'courses',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

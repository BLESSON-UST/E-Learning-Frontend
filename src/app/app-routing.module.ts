import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'courses',component:CoursesComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'contactus', component:FooterComponent},
  {path: 'userdashboard', component:UserdashboardComponent},
  {path: 'admindashboard', component:AdminDashboardComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

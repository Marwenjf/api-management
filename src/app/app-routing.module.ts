import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoadStudentsComponent } from './components/load-students/load-students.component';
import { LoadPaymentsComponent } from './components/load-payments/load-payments.component';
import { TemplateComponent } from './components/template/template.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  {path : "", redirectTo:'/login',pathMatch:'full'},
  {path : "login", component : LoginComponent},
  {path : "admin", component : TemplateComponent, canActivate : [AuthGuard],children:[
  {path : "home", component : HomeComponent},
  {path : "profile", component : ProfileComponent},
  {path : "dashboard", component : DashboardComponent},
  {path : "students", component : StudentsComponent},
  {path : "load-students", component : LoadStudentsComponent,
    canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}
  },
  {path : "load-payments", component : LoadPaymentsComponent,
    canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}
  }
  ]},
  {path : "payments", component : PaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

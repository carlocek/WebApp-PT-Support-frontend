import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PtDashboardComponent } from './components/pt-dashboard/pt-dashboard.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateExerciseComponent } from './components/create-exercise/create-exercise.component';
import { CreateWorkoutProgramComponent } from './components/create-wprogram/create-wprogram.component';

const routes: Routes = [
  {path: 'pt/create-wprogram', component: CreateWorkoutProgramComponent},
  {path: 'pt/create-exercise', component: CreateExerciseComponent},
  {path: 'pt/create-customer', component: CreateCustomerComponent},
  {path: 'pt/list-customers', component: CustomerListComponent},
  {path: 'pt', component: PtDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
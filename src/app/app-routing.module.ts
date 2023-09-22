import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { PtDashboardComponent } from './components/pt-dashboard/pt-dashboard.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateGymMachineComponent } from './components/create-gym-machine/create-gym-machine.component';
import { CreateExerciseComponent } from './components/create-exercise/create-exercise.component';
import { CreateWorkoutProgramComponent } from './components/create-wprogram/create-wprogram.component';

import { AddExerciseToWprogramComponent } from './components/add-exercise-to-wprogram/add-exercise-to-wprogram.component';
import { ListGymMachinesComponent } from './components/list-gym-machines/list-gym-machines.component';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';

const routes: Routes = [
  {path: 'pt/add-exercise-to-wprogram', component: AddExerciseToWprogramComponent},
  {path: 'pt/create-gym-machine', component: CreateGymMachineComponent},


  {path: 'pt/create-wprogram', component: CreateWorkoutProgramComponent},
  {path: 'pt/create-exercise', component: CreateExerciseComponent},
  {path: 'pt/create-customer', component: CreateCustomerComponent},
  {path: 'pt/list-customers', component: ListCustomerComponent},
  {path: 'pt', component: PtDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pt/list-gym-machines', component: ListGymMachinesComponent},
  {path: 'pt/list-exercises', component: ListExerciseComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
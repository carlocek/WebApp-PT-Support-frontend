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
import { SearchExerciseComponent } from './components/search-exercise/search-exercise.component';
import { ListWprogramsComponent } from './components/list-wprograms/list-wprograms.component';
import { SearchWprogramComponent } from './components/search-wprogram/search-wprogram.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ListWprogramsCustomerComponent } from './components/list-wprograms-customer/list-wprograms-customer.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { ChangePtComponent } from './components/change-pt/change-pt.component';

const routes: Routes = [
  {path: 'pt/create-gym-machine', component: CreateGymMachineComponent},
  {path: 'pt/create-wprogram', component: CreateWorkoutProgramComponent},
  {path: 'pt/add-exercise-to-wprogram/:id', component: AddExerciseToWprogramComponent},
  {path: 'pt/create-exercise', component: CreateExerciseComponent},
  {path: 'pt/create-customer', component: CreateCustomerComponent},
  {path: 'pt/list-customers', component: ListCustomerComponent},
  {path: 'pt', component: PtDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pt/list-gym-machines', component: ListGymMachinesComponent},
  {path: 'pt/list-exercises', component: ListExerciseComponent},
  {path: 'pt/search-exercise', component: SearchExerciseComponent},
  {path: 'pt/list-workout-programs', component: ListWprogramsComponent},
  {path: 'pt/search-wprogram', component: SearchWprogramComponent},
  {path: 'pt/search-customer', component: SearchCustomerComponent},
  {path: 'login-customer', component: LoginCustomerComponent},
  {path: 'register-customer', component: RegisterCustomerComponent},
  {path: 'customer', component: CustomerDashboardComponent},
  {path: 'customer/list-workout-programs', component: ListWprogramsCustomerComponent},
  {path: 'customer/change-pt', component: ChangePtComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
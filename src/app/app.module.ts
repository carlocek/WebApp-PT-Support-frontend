import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { PtDashboardComponent } from './components/pt-dashboard/pt-dashboard.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateExerciseComponent } from './components/create-exercise/create-exercise.component';
import { SearchExerciseComponent } from './components/search-exercise/search-exercise.component';
import { CreateWorkoutProgramComponent } from './components/create-wprogram/create-wprogram.component';
import { AddExerciseToWprogramComponent } from './components/add-exercise-to-wprogram/add-exercise-to-wprogram.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ListGymMachinesComponent } from './components/list-gym-machines/list-gym-machines.component';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { CreateGymMachineComponent } from './components/create-gym-machine/create-gym-machine.component';
import { PtDashboardToolbarComponent } from './components/pt-dashboard-toolbar/pt-dashboard-toolbar.component';
import { ListWprogramsComponent } from './components/list-wprograms/list-wprograms.component';
import { AssignWorkoutProgramToCustomerComponent } from './components/assign-wprogram-to-customer/assign-wprogram-to-customer.component';
import { SearchWprogramComponent } from './components/search-wprogram/search-wprogram.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerDashboardToolbarComponent } from './components/customer-dashboard-toolbar/customer-dashboard-toolbar.component';
import { ListWprogramsCustomerComponent } from './components/list-wprograms-customer/list-wprograms-customer.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { ChangePtComponent } from './components/change-pt/change-pt.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListCustomerComponent,
    PtDashboardComponent,
    CreateCustomerComponent,
    RegisterComponent,
    CreateExerciseComponent,
    SearchExerciseComponent,
    CreateWorkoutProgramComponent,
    AddExerciseToWprogramComponent,
    ListGymMachinesComponent,
    ListExerciseComponent,
    CreateGymMachineComponent,
    PtDashboardToolbarComponent,
    ListWprogramsComponent,
    AssignWorkoutProgramToCustomerComponent,
    SearchWprogramComponent,
    SearchCustomerComponent,
    LoginCustomerComponent,
    CustomerDashboardComponent,
    CustomerDashboardToolbarComponent,
    ListWprogramsCustomerComponent,
    RegisterCustomerComponent,
    ChangePtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule, 
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

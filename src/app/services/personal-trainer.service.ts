import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Exercise } from '../model/exercise';
import { WorkoutProgram } from '../model/workout-program';
import { GymMachine } from '../model/gym-machine';

@Injectable({
  providedIn: 'root'
})

export class PersonalTrainerService {

  headers = new HttpHeaders({
    "Authorization": 'Bearer ${localStorage.getItem("token")}'
  });
  
  constructor(private http: HttpClient) {
    
  }

  insertCustomer(body: Customer){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/create'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  getCustomers(ptId: number){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-customer/'+ptId
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  insertGymMachine(body: GymMachine){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/gym-machine/create'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  insertExercise(body: Exercise){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/exercises/create'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  searchExercise(exName: string){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/exercise/search/'+exName
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  insertWorkoutProgram(body: WorkoutProgram){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprograms/create'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  getGymMachines(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-gym-machines'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getExercises(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-exercises'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getWorkoutPrograms(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-wprograms'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  setHeaders(){
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    });
  }

}

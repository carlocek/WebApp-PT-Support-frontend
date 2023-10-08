import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Exercise } from '../model/exercise';
import { WorkoutProgram } from '../model/workout-program';
import { GymMachine } from '../model/gym-machine';
import { Observable, catchError, throwError } from 'rxjs';

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

  getCustomers(ptId: string|null){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-customer/'+ptId
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }


  assignWorkoutProgramToCustomer(custId: number, body: WorkoutProgram){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/'+custId+'/assign-wp'
    console.log("header immesso nella richiesta http: ", this.headers)
    console.log("sto inviando il body: ", body)
    return this.http.put(backendUrl, body, { headers: this.headers })
  }
  
  disableCutomers(customerId: number){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/disable/'+customerId
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.put(backendUrl, null, { headers: this.headers })
  }

  searchCustomer(cName: string){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/search/'+cName
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

  addExerciseToWorkoutProgram(wpId: number, body: Exercise){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprograms/'+wpId+'/add-ex'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.put(backendUrl, body, { headers: this.headers })
    }

  insertWorkoutProgram(body: WorkoutProgram){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprograms/create'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  searchWorkoutProgram(wpName: string){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprograms/search/'+wpName
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getPersonalTrainer(ptEmail: String){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/search/'+ptEmail
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers }) 
  }

  getGymMachines(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/gym-machines/list'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getExercises(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/exercises/list'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getWorkoutPrograms(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprograms/list'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }
  
  ping(): Observable<HttpResponse<any>> {
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ping'
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers, observe: 'response' })
  }

  setHeaders(){
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    });
  }

  // private handleError(error: HttpErrorResponse) {
  //   // Gestisci l'errore qui, puoi loggarlo o fare altro
  //   console.error('Errore nella richiesta:', error);
  //   return throwError('Qualcosa è andato storto nella richiesta.');
  // }

}

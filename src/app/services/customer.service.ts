import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  headers = new HttpHeaders({
    "Authorization": 'Bearer ${localStorage.getItem("token")}'
  });
  
  constructor(private http: HttpClient) {
    
  }

  getCustomerByEmail(cEmail: string | null){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/search-by-email/'+cEmail
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getWorkoutPrograms(cId: string | null){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/list-wprograms/'+cId
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getPersonalTrainer(){
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list'
    console.log("header immesso nella richiesta httpx: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  getExerciseOfWorkoutProgram(wpId: string){
    this.setHeaders
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/wprogram/search-exercise/'+wpId
    console.log("header immesso nella richiesta httpx: ", this.headers)
    return this.http.get(backendUrl, { headers: this.headers })
  }

  changePersonalTrainer(cId:string|null, ptId:string){
    let body: string
    body = "cId:"+cId+"; "+"ptId:"+ptId
    console.log(cId, "-", ptId, "-", body)
    this.setHeaders()
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/change-pt/'+cId+'/'+ptId
    console.log("header immesso nella richiesta http: ", this.headers)
    return this.http.post(backendUrl, body, { headers: this.headers })
  }

  setHeaders(){
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    });
  }
  
}

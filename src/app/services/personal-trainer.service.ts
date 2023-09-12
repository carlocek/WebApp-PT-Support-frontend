import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

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

  setHeaders(){
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    });
  }
}

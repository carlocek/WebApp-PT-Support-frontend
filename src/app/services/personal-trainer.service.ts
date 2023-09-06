import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})

export class PersonalTrainerService {
  constructor(private http: HttpClient) {
    
  }

  insertCustomer(body: Customer){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customers/create'
    return this.http.post(backendUrl, body)
  }

  getCustomers(ptId: number){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/ptrainers/list-customer/'+ptId
    return this.http.get(backendUrl)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../model/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  login(body: LoginForm) {
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/login'
    return this.http.post(backendUrl , body);
  }

  loginCustomer(body: LoginForm){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/customer/login'
    return this.http.post(backendUrl , body);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalTrainer } from '../model/personal-trainer';
import { LoginForm } from '../model/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  login(body: LoginForm){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/login'
    console.log(localStorage.getItem('token'));
    return this.http.post(backendUrl , body);
  }
}

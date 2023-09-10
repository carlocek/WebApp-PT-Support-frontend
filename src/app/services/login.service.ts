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

  headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });

  login(body: LoginForm){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/login'
    return this.http.post(backendUrl , body, { headers: this.headers });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalTrainer } from '../model/personal-trainer';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(private http: HttpClient) {
    
  }

  register(body: PersonalTrainer){
    const backendUrl = 'http://localhost:8080/WebApp-PT-Support/rest/register'
    return this.http.post(backendUrl, body)
  }
}


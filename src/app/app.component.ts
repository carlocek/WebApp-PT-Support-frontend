import { Component } from '@angular/core';
import { PersonalTrainer } from './model/personal-trainer';
import { Customer } from './model/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApp-PT-Support-frontend';
  personalTrainer: PersonalTrainer

  constructor(){
    let c: Customer[] = [new Customer(0, 0, '', '', '', new Date(), '', '')]
    this.personalTrainer = new PersonalTrainer(0, '', '', '', new Date(), '', c)
  }

}

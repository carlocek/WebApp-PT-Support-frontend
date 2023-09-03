import { Component } from '@angular/core';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0];

}

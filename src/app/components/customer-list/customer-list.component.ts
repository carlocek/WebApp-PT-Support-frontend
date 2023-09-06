import { Component } from '@angular/core';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0];
  customers: any

  constructor(private ptService: PersonalTrainerService){
    ptService.getCustomers(this.personalTrainer.id).subscribe((data: any) =>{
      this.customers = Object.keys(data).map((key)=>{ return data[key]})
    })
  }

}

import { Component } from '@angular/core'
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  customers: any

  constructor(private ptService: PersonalTrainerService){
    this.ptService.getCustomers(this.personalTrainer.id).subscribe((data: any) =>{
      this.customers = Object.keys(data).map((key)=>{ return data[key]})
      console.log(this.customers)
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }

}

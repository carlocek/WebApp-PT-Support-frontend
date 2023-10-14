import { Component } from '@angular/core'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})

export class ListCustomerComponent {
  customers: any

  constructor(private ptService: PersonalTrainerService, private router:Router){
    this.ptService.getCustomers(localStorage.getItem('ptId')).subscribe((data: any) =>{
      this.customers = Object.keys(data).map((key)=>{ return data[key]})
      console.log(this.customers)
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }

  disableCustomer(customerId: number){
    this.ptService.disableCustomers(customerId).subscribe((data: any) =>{
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
    this.router.navigate(['pt'])
  }

}
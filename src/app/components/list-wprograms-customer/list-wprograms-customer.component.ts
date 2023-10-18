import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-wprograms-customer',
  templateUrl: './list-wprograms-customer.component.html',
  styleUrls: ['./list-wprograms-customer.component.css']
})
export class ListWprogramsCustomerComponent {
  wPrograms: any

  constructor(private customerService: CustomerService){
    this.customerService.getWorkoutPrograms(localStorage.getItem('customerId')).subscribe((data: any) =>{
      this.wPrograms = Object.keys(data).map((key)=>{ return data[key]})
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  cId : any

  constructor(){
    this.cId = localStorage.getItem('customerId')
  }
}

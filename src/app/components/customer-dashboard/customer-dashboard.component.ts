import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit{
  cId : any
  isLoading = true

  constructor(){}

  ngOnInit(){
    this.cId = localStorage.getItem('customerId')
    this.isLoading = false
    console.log("id:"+this.cId)
  }
}

import { Component, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard-toolbar',
  templateUrl: './customer-dashboard-toolbar.component.html',
  styleUrls: ['./customer-dashboard-toolbar.component.css']
})
export class CustomerDashboardToolbarComponent implements OnInit {
  @Input() isDashboard: any
  customer: any
  loggedEmail: any
  name: any
  surname: any
  isLoading : boolean | undefined

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(){
    // this.isLoading = true
    this.name = ''
    this.surname = ''

    if(localStorage.getItem('customerName') == null){
      this.takeCustomerInfo()
    }else{
      this.name = localStorage.getItem('customerName')
      this.surname = localStorage.getItem('customerSurname')
      this.isLoading = false
    }
    // this.isLoading = false
  }

  takeCustomerInfo(){
    console.log('Prendo le info del customer dal backend')
    this.loggedEmail = localStorage.getItem('customerEmail')
    this.customerService.getCustomerByEmail(this.loggedEmail).subscribe((data: any) =>{
      this.customer = Object.keys(data).map((key)=>{ return data[key]})
      localStorage.setItem('customerId', this.customer[2])
      localStorage.setItem('customerName', this.customer[3])
      localStorage.setItem('customerSurname', this.customer[6])
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
      console.log(this.customer)
      this.name = localStorage.getItem('customerName')
      this.surname = localStorage.getItem('customerSurname')
      this.isLoading = false
    })
    
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['home'])
  }

}

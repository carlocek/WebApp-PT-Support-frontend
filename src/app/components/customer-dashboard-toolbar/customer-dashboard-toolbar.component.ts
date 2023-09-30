import { Component, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard-toolbar',
  templateUrl: './customer-dashboard-toolbar.component.html',
  styleUrls: ['./customer-dashboard-toolbar.component.css']
})
export class CustomerDashboardToolbarComponent {
  @Input() isDashboard: any
  customer: any
  loggedEmail: any
  name: any
  surname: any

  constructor(private customerService: CustomerService, private router: Router){
    this.name = ''
    this.surname = ''

    if(localStorage.getItem('customerName') == null){
      this.takeCustomerInfo()
    }else{
      this.name = localStorage.getItem('customerName')
      this.surname = localStorage.getItem('customerSurname')
    }
  }

  takeCustomerInfo(){
    console.log('Prendo le info del customer dal backend')
    this.loggedEmail = localStorage.getItem('customerEmail')
    this.customerService.getCustomerByEmail(this.loggedEmail).subscribe((data: any) =>{
      this.customer = Object.keys(data).map((key)=>{ return data[key]})
      // Orribile, bisognerebbe trovare un modo per impachettarlo in un oggetto PT
      localStorage.setItem('customerId', this.customer[2])
      localStorage.setItem('customerName', this.customer[3])
      localStorage.setItem('customerSurname', this.customer[6])
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
    console.log(this.customer)
    this.name = localStorage.getItem('customerName')
    this.surname = localStorage.getItem('customerSurname')
  }

  logout(){
    localStorage.removeItem('customerName')
    localStorage.removeItem('customerSurname')
    localStorage.removeItem('customerEmail')
    localStorage.removeItem('customerId')
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }

}

import { Component } from '@angular/core'
import { CustomerService } from 'src/app/services/customer.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-customer-program-for-statics',
  templateUrl: './view-customer-program-for-statics.component.html',
  styleUrls: ['./view-customer-program-for-statics.component.css']
})
export class ViewCustomerProgramForStaticsComponent {
  wPrograms: any
  cId:any
  isCustomer:boolean = false

  constructor(private customerService: CustomerService, private route:ActivatedRoute){
    this.cId = this.route.snapshot.paramMap.get('cId')
    if(localStorage.getItem('customerId')){
      this.isCustomer = true
    }
    this.customerService.getWorkoutPrograms(this.cId).subscribe((data: any) =>{
      this.wPrograms = Object.keys(data).map((key)=>{ return data[key]})
    })
  }
}

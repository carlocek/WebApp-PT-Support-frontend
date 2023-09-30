import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {
    cNameForm: FormGroup
    customers: any
    isSubmitted: boolean
    numElement: number

    constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
      this.cNameForm = this.fb.group({
        name:''
      });
      this.isSubmitted = false
      this.numElement = 0
    }
  
    onSubmit() {
      this.ptService.searchCustomer(this.cNameForm.value.name).subscribe((data: any) =>{
        this.customers = Object.keys(data).map((key)=>{ return data[key]})
        console.log(this.customers)
        this.numElement = this.customers.length
      })
      this.isSubmitted = true
    }
}

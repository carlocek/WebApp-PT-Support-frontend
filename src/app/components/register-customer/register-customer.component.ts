import { CustomerService } from './../../services/customer.service';
import { RegisterService } from 'src/app/services/register.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent {
  customerForm: FormGroup

  constructor(private fb: FormBuilder, private registerService: RegisterService, private _snackBar: MatSnackBar, 
    customerService: CustomerService, private router:Router) {
    this.customerForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      name: '',
      surname: '',
      email: '',
      dateOfBirth: null,
      password: '',
      personalTrainerid: '',
      personalTrainer: null,
      workoutProgramList: null
    });
  }


  onSubmit() {
    this.customerForm.value.dateOfBirth = this.dateFormatter(this.customerForm.value.dateOfBirth)
    const customer = this.customerForm.value as Customer
    console.log(customer)

    const response = this.registerService.registerCustomer(customer).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Registrazione del Customer eseguita', 'Ok')
      this.router.navigate(['home'])
    }
    else
      this.openSnackBar('Errore nella registrazione del Personal Trainer', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }

  dateFormatter(date: Date){
    const m = date.getMonth() + 1
    let month
    if(m < 10){
      month = "0" + m.toString()
    }
    else{
      month = m.toString()
    }

    let day
    if(date.getDate() < 10){
      day = "0" + date.getDate().toString()
    }else{
      day = date.getDate().toString()
    }

    const formattedDate = date.getFullYear() + "-" + month + "-" + day
    return formattedDate
  }
}

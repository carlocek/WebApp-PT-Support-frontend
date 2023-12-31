import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Customer } from 'src/app/model/customer'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent {
  customerForm: FormGroup
  customerId: number = Math.floor(Math.random() * 100000)

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar,
    private router: Router) {
    this.customerForm = this.fb.group({
      id: this.customerId,
      personalTrainerId: localStorage.getItem('ptId'),
      name: '',
      surname: '',
      email: '',
      dateOfBirth: null,
      password: '',
      personalTrainer: localStorage.getItem('ptName'),
      workoutProgramList: null
    });
  }


  onSubmit() {
    this.customerForm.value.dateOfBirth = this.dateFormatter(this.customerForm.value.dateOfBirth)
    const customer = this.customerForm.value as Customer
    console.log(customer)

    const response = this.ptService.insertCustomer(customer).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Cliente salvato', 'Ok')
      // this.customerForm.reset()
      this.router.navigate(['pt/assign-wprogram-to-customer/'+this.customerId])
    }
    else
      this.openSnackBar('Errore nel salvataggio del cliente', 'Ok')
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
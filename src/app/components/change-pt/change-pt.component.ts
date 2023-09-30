import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Exercise } from 'src/app/model/exercise'
import { CustomerService } from 'src/app/services/customer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-change-pt',
  templateUrl: './change-pt.component.html',
  styleUrls: ['./change-pt.component.css']
})
export class ChangePtComponent {
  customerPTForm: FormGroup
  personalTrainers: any

  constructor(private fb: FormBuilder, private customerService: CustomerService, private _snackBar: MatSnackBar,
    private router: Router) {
    this.customerPTForm = this.fb.group({
      cId: localStorage.getItem('customerId'),
      ptId:'',
    });
    customerService.getPersonalTrainer().subscribe((data:any) =>{
      this.personalTrainers = Object.keys(data).map((key)=>{return data[key]})
    })
    
  }


  onSubmit() {
    console.log(this.customerPTForm.value.cId, this.customerPTForm.value.ptId)
    const response = this.customerService.changePersonalTrainer(this.customerPTForm.value.cId, this.customerPTForm.value.ptId).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Personal Trainer modificato', 'Ok')
      this.router.navigate(['customer'])
    }
    else
      this.openSnackBar('Errore', 'Ok')
  }
  
  setPtId(ptId:any){
    this.customerPTForm.value.ptId = ptId
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }
}

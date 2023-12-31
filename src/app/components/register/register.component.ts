import { RegisterService } from 'src/app/services/register.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ptForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private _snackBar: MatSnackBar,
    private router:Router) {
    this.ptForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      name: '',
      surname: '',
      email: '',
      dateOfBirth: null,
      password: '',
      workoutProgramList: null
    });
  }


  onSubmit() {
    this.ptForm.value.dateOfBirth = this.dateFormatter(this.ptForm.value.dateOfBirth)
    const pt = this.ptForm.value as PersonalTrainer
    console.log(pt)

    const response = this.registerService.register(pt).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Registrazione del Personal Trainer eseguita', 'Ok')
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

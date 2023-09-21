import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { GymMachine } from 'src/app/model/gym-machine';
import { MatSnackBar } from '@angular/material/snack-bar'
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-gym-machine',
  templateUrl: './create-gym-machine.component.html',
  styleUrls: ['./create-gym-machine.component.css']
})
export class CreateGymMachineComponent {
  gymMachineForm: FormGroup
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar,
    private router: Router) {
    this.gymMachineForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      name: ''
    });
  }

  onSubmit() {
    const gymMachine = this.gymMachineForm.value as GymMachine
    console.log(gymMachine)

    const response = this.ptService.insertGymMachine(gymMachine).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Macchinario salvato', 'Ok')
      this.gymMachineForm.reset()
      this.router.navigate(['pt'])
    }
    else
      this.openSnackBar('Errore nel salvataggio del macchinario', 'Ok')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }
}

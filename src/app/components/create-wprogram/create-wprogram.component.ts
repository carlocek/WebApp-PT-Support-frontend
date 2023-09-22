import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';
import { GYM_MACHINES } from 'src/app/mocks/gym-machine-mock';
import { Exercise } from 'src/app/model/exercise';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { GymMachine } from 'src/app/model/gym-machine';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { WorkoutProgram } from 'src/app/model/workout-program';

@Component({
  selector: 'app-create-wprogram',
  templateUrl: './create-wprogram.component.html',
  styleUrls: ['./create-wprogram.component.css']
})
export class CreateWorkoutProgramComponent {
  wprogramForm: FormGroup
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  wprogramId: number = Math.floor(Math.random() * 100000)
  diffValues: number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
    this.wprogramForm = this.fb.group({
      id: this.wprogramId,
      name: '',
      difficultyLevel:'',
      estimatedDuration:'',
      type:'',
      description: '',
      exList:''
    });
  }


  onSubmit() {
    const wprogram = this.wprogramForm.value as WorkoutProgram
    console.log(wprogram)

    const response = this.ptService.insertWorkoutProgram(wprogram).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Programma salvato', 'Ok')
      this.wprogramForm.reset()
    }
    else
      this.openSnackBar('Errore nel salvataggio del programma', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

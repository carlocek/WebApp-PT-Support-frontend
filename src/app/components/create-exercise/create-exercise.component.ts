import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { GYM_MACHINES } from 'src/app/mocks/gym-machine-mock'
import { Exercise } from 'src/app/model/exercise'
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { GymMachine } from 'src/app/model/gym-machine'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {
  exerciseForm: FormGroup
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  machines: GymMachine[] = GYM_MACHINES
  diffValues: number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
    this.exerciseForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      name: '',
      difficultyLevel:'',
      associatedMachine:'',
      description: '',
    });
  }


  onSubmit() {
    const exercise = this.exerciseForm.value as Exercise
    console.log(exercise)

    const response = this.ptService.insertExercise(exercise).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Esercizio salvato', 'Ok')
      this.exerciseForm.reset()
    }
    else
      this.openSnackBar('Errore nel salvataggio dell\' esercizio', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }

}

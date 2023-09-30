import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Exercise } from 'src/app/model/exercise'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {
  exerciseForm: FormGroup
  machines: any
  diffValues: number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar,
    private router: Router) {
    this.exerciseForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      machineId:'',
      name: '',
      difficultyLevel:'',
      machine: '',
      description: '',
    });
    this.ptService.getGymMachines().subscribe((data:any) =>{
      this.machines = Object.keys(data).map((key)=>{return data[key]})
    })
  }


  onSubmit() {
    const exercise = this.exerciseForm.value as Exercise
    console.log(exercise)

    const response = this.ptService.insertExercise(exercise).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Esercizio salvato', 'Ok')
      this.exerciseForm.reset()
      this.router.navigate(['pt'])
    }
    else
      this.openSnackBar('Errore nel salvataggio dell\' esercizio', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }

}

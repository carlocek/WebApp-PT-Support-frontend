import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { WorkoutProgram } from 'src/app/model/workout-program';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-wprogram',
  templateUrl: './create-wprogram.component.html',
  styleUrls: ['./create-wprogram.component.css']
})
export class CreateWorkoutProgramComponent {
  wprogramForm: FormGroup
  wprogramId: number = Math.floor(Math.random() * 100000)
  diffValues: number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar,
    private router: Router) {
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
      this.router.navigate(['pt/add-exercise-to-wprogram/'+this.wprogramId])
    }
    else
      this.openSnackBar('Errore nel salvataggio del programma', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-search-exercise',
  templateUrl: './search-exercise.component.html',
  styleUrls: ['./search-exercise.component.css']
})
export class SearchExerciseComponent {
    exNameForm: FormGroup
    exercises: any
    isSubmitted: boolean
    numElement: number

    constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
      this.exNameForm = this.fb.group({
        name:''
      });
      this.isSubmitted = false
      this.numElement = 0
    }
  
    onSubmit() {
      this.ptService.searchExercise(this.exNameForm.value.name).subscribe((data: any) =>{
        this.exercises = Object.keys(data).map((key)=>{ return data[key]})
        console.log(this.exercises)
        this.numElement = this.exercises.length
        console.log("Token preso dal local storage: ", localStorage.getItem('token'))
      })
      this.isSubmitted = true
    }
}

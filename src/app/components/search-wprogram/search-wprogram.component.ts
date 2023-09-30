import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-search-wprogram',
  templateUrl: './search-wprogram.component.html',
  styleUrls: ['./search-wprogram.component.css']
})
export class SearchWprogramComponent {
    wpNameForm: FormGroup
    wprograms: any
    isSubmitted: boolean
    numElement: number

    constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
      this.wpNameForm = this.fb.group({
        name:''
      });
      this.isSubmitted = false
      this.numElement = 0
    }
  
    onSubmit() {
      this.ptService.searchWorkoutProgram(this.wpNameForm.value.name).subscribe((data: any) =>{
        this.wprograms = Object.keys(data).map((key)=>{ return data[key]})
        console.log(this.wprograms)
        this.numElement = this.wprograms.length
        console.log("Token preso dal local storage: ", localStorage.getItem('token'))
      })
      this.isSubmitted = true
    }
}

import { Component } from '@angular/core'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-search-exercise',
  templateUrl: './search-exercise.component.html',
  styleUrls: ['./search-exercise.component.css']
})
export class SearchExerciseComponent {
  exercises: any

  // constructor(private ptService: PersonalTrainerService){
  //   this.ptService.searchExercise().subscribe((data: any) =>{
  //     this.exercises = Object.keys(data).map((key)=>{ return data[key]})
  //     console.log("Token preso dal local storage: ", localStorage.getItem('token'));
  //   })
  // }

}

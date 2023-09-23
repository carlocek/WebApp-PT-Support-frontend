import { Component } from '@angular/core';
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})
export class ListExerciseComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  exercise: any

  constructor(private ptService: PersonalTrainerService){
    this.ptService.getExercises().subscribe((data: any) =>{
      this.exercise = Object.keys(data).map((key)=>{ return data[key]})
      console.log(this.exercise)
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }
}

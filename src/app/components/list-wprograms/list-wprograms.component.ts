import { Component } from '@angular/core';
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-list-wprograms',
  templateUrl: './list-wprograms.component.html',
  styleUrls: ['./list-wprograms.component.css']
})
export class ListWprogramsComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  wPrograms: any

  constructor(private ptService: PersonalTrainerService){
    this.ptService.getWorkoutPrograms().subscribe((data: any) =>{
      this.wPrograms = Object.keys(data).map((key)=>{ return data[key]})
      console.log(this.wPrograms)
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }
}
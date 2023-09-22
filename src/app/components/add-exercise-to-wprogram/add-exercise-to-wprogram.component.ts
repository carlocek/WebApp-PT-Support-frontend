import { Component, Input, OnInit } from '@angular/core';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';
import { Exercise } from 'src/app/model/exercise';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { WorkoutProgram } from 'src/app/model/workout-program';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { CreateWorkoutProgramComponent } from '../create-wprogram/create-wprogram.component';

@Component({
  selector: 'app-add-exercise-to-wprogram',
  templateUrl: './add-exercise-to-wprogram.component.html',
  styleUrls: ['./add-exercise-to-wprogram.component.css']
})
export class AddExerciseToWprogramComponent implements OnInit {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  @Input()
  wprogramId!: number;
  exercises: Exercise[] = []

  constructor(private ptService: PersonalTrainerService){

  }

  ngOnInit() {
    this.ptService.getAllExercises().subscribe((data: any) => {
      // Inizializza l'array exercises con il campo selected impostato su false per tutti gli esercizi
      this.exercises = data.map((exercise: Exercise) => ({ ...exercise, selected: false }));
    });
  }

  addSelectedExercises() {
    const selectedExercises = this.exercises.filter(exercise => exercise.selected);
    for(let ex of selectedExercises){
      console.log("sto aggiornando il wprogram con id: ", this.wprogramId)
      console.log("sto aggiungendo l'esercizio: ", ex)
      const response = this.ptService.addExerciseToWorkoutProgram(this.wprogramId, ex).subscribe()
      console.log(response)
    }
  }

}

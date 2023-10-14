import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/model/exercise';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-exercise-to-wprogram',
  templateUrl: './add-exercise-to-wprogram.component.html',
  styleUrls: ['./add-exercise-to-wprogram.component.css']
})
export class AddExerciseToWprogramComponent implements OnInit {
  // @Input() wprogramId!: number;
  wprogramId: number = -1

  exercises: Exercise[] = []


  constructor(private route: ActivatedRoute, private ptService: PersonalTrainerService, private router: Router){
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.wprogramId = +idParam;
    }

    this.ptService.getExercisesNotInWorkoutProgram(this.wprogramId).subscribe((data: any) => {
      // Inizializza l'array exercises con il campo selected impostato su false per tutti gli esercizi
      this.exercises = data.map((exercise: Exercise) => ({ ...exercise, selected: false }));
      console.log(this.exercises)
    });
  }

  async addSelectedExercises() {
    const selectedExercises = this.exercises.filter(exercise => exercise.selected);
    const response = this.ptService.addExerciseToWorkoutProgram(this.wprogramId, selectedExercises).subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
    
    this.router.navigate(['pt'])
  }

}

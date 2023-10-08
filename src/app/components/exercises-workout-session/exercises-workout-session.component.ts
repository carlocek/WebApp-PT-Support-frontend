import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DexieService, WorkoutSession } from 'src/app/services/dexie-service.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-exercises-workout-session',
  templateUrl: './exercises-workout-session.component.html',
  styleUrls: ['./exercises-workout-session.component.css']
})
export class ExercisesWorkoutSessionComponent {
  exercises: any
  nOfExercises: number = 0
  wpName: string | null
  activeExercise: any
  i: number = 0
  sessionDataForm : FormGroup
  workoutSessionId : number = -1

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private fb: FormBuilder,
    private dexieService: DexieService, private router: Router){
    const idParam = this.route.snapshot.paramMap.get('id')
    this.wpName = this.route.snapshot.paramMap.get('name')
    const id = this.route.snapshot.paramMap.get('wsId')
    if(id)
      this.workoutSessionId = parseInt(id, 10)
    if (idParam) {
      this.customerService.getExerciseOfWorkoutProgram(idParam).subscribe((data: any) => {
        this.exercises = Object.keys(data).map((key)=>{return data[key]})
        this.nOfExercises = this.exercises.length
        this.nextExercise()
      });
    }
    this.sessionDataForm = this.fb.group({
      machineId:'',
      load:'',
      repetition:'',
      timeStamp:''
    })
  }

  async onSubmit(){
    await this.dexieService.getWorkoutSession(this.workoutSessionId).then((ws) => {
        this.dexieService.addSessionData(ws, this.activeExercise.machineId, 
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 4), 100)
    })
    this.nextExercise()
  }

  nextExercise(){
    this.activeExercise = this.exercises[this.i]
    this.i++
    console.log(this.activeExercise)
  }

  endWsession(){
    this.router.navigate(['customer/end-wsession/'+this.workoutSessionId])
  }
}

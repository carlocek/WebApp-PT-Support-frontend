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
  programName: string | null
  activeExercise: any
  i: number = 0
  sessionDataForm : FormGroup
  workoutSessionId : number = -1
  isLoading = true

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private fb: FormBuilder,
    private dexieService: DexieService, private router: Router){
    const idParam = this.route.snapshot.paramMap.get('id')
    this.programName = this.route.snapshot.paramMap.get('name')
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
      repetition:''
    })
  }

  async onSubmit(){
    await this.dexieService.getWorkoutSession(this.workoutSessionId).then(async (ws) => {
      const series: number = Math.random() * 3 + 1
      const weight: number = Math.floor(Math.random() * 100) + 1
      const repetitions: number = Math.floor(Math.random() * 3) + 1

      let i: number
      for(i=0; i<series; i++){
        await this.delay(1000);
        const date = new Date()
        const timestamp = date.toISOString();
        console.log(timestamp)
        if(this.activeExercise.machine == 'Nessuno'){
          this.dexieService.addSessionData(ws, this.activeExercise.name, -1, 
            0, parseInt(this.sessionDataForm.value.repetition, 10), timestamp)
        }else{
          this.dexieService.addSessionData(ws, this.activeExercise.name, this.activeExercise.machineId, 
            weight, repetitions, timestamp)
        }
      }
    })
    this.isLoading = true
    this.nextExercise()
  }

  nextExercise(){
    this.activeExercise = this.exercises[this.i]
    this.i++
    console.log(this.activeExercise)
    this.isLoading = false
  }

  async endWsession(){
    this.isLoading = true
    await this.dexieService.getWorkoutSession(this.workoutSessionId).then(async (ws) => {
      const series: number = Math.random() * 3 + 1
      const weight: number = Math.floor(Math.random() * 100) + 1
      const repetitions: number = Math.floor(Math.random() * 3) + 1
      let i: number

      for(i=0; i<series; i++){
        await this.delay(1000);
        const date = new Date()
        const timestamp = date.toISOString();
        if(this.activeExercise.machine == 'Nessuno'){
          this.dexieService.addSessionData(ws, this.activeExercise.name, this.activeExercise.machineId, 
            0, parseInt(this.sessionDataForm.value.repetition, 10), timestamp)
        }else{
          this.dexieService.addSessionData(ws, this.activeExercise.name, this.activeExercise.machineId, 
            weight, repetitions, timestamp)
        }
      }

    })
    
    this.router.navigate(['customer/end-wsession/'+this.workoutSessionId])
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

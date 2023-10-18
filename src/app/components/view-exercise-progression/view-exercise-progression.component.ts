import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup} from '@angular/forms'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'
import { BaseChartDirective } from 'ng2-charts'


@Component({
  selector: 'app-view-exercise-progression',
  templateUrl: './view-exercise-progression.component.html',
  styleUrls: ['./view-exercise-progression.component.css']
})
export class ViewExerciseProgressionComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
  exercises: any
  exerciseLoadProgression: any
  ex : any
  exerciseForm: FormGroup
  cId:any
  wpName:any
  isLoading:boolean = true
  isCustomer = false

  lineChartLabels: string[] = []
  lineChartData: any[] = []
  lineChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 255)',
      },
    },
  }

  constructor(private ptService: PersonalTrainerService, private route:ActivatedRoute, private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({
      exName: '',
    })
  }

  ngOnInit() {
    if(localStorage.getItem('customerId')){
      this.isCustomer = true
    }
    this.cId = this.route.snapshot.paramMap.get('cId')
    this.wpName = this.route.snapshot.paramMap.get('wpName')
    this.ptService.searchWorkoutProgram(this.wpName).subscribe(
      (data: any) =>{
        let wprograms = Object.keys(data).map((key)=>{ return data[key]})
        this.ptService.getExercisesOfWorkoutProgram(wprograms[0].id).subscribe((data: any) => {
          this.exercises = Object.keys(data).map((key)=>{return data[key]})
          this.exercises.forEach((ex:any)=>{
            if(ex.machine == 'Nessuno'){
              this.exercises.splice(this.exercises.indexOf(ex), 1)
            }
          })
        });
        
      }
    )
  }

  onSubmit(){
    this.isLoading = true
    this.lineChartLabels = []
    this.lineChartData = []
    this.ex = this.exerciseForm.value.exName
    this.ptService.getExerciseLoadProgression(this.cId, this.wpName, this.ex).subscribe((data: any) => {
      this.exerciseLoadProgression = new Map(Object.entries(data))
      this.prepareLineChartData()
    })
    
  }

  prepareLineChartData() {
    this.lineChartLabels = Array.from(this.exerciseLoadProgression.keys())

    this.lineChartData.push({
      data: Array.from(this.exerciseLoadProgression.values()),
      label: 'Carico esercizio:' + this.ex
    });
    this.isLoading = false
  }
}

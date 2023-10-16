import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DexieService } from 'src/app/services/dexie-service.service';

@Component({
  selector: 'app-list-exercises-wprogram',
  templateUrl: './list-exercises-wprogram.component.html',
  styleUrls: ['./list-exercises-wprogram.component.css']
})
export class ListExercisesWprogramComponent {
  exercises: any
  programName: string | null
  wpId: string | null
  wsessionId: number | undefined

  constructor(private route: ActivatedRoute, private customerService:CustomerService,
    private dexieService: DexieService){
    this.wpId = this.route.snapshot.paramMap.get('id')
    this.programName = this.route.snapshot.paramMap.get('name')
    let customerIdString = localStorage.getItem('customerId')
    let customerId = 0
    if(customerIdString){
      customerId = parseInt(customerIdString, 10)
    }
    this.wsessionId = dexieService.inizializeSession(this.programName, customerId).id
    if (this.wpId) {
      this.customerService.getExerciseOfWorkoutProgram(this.wpId).subscribe((data: any) => {
        this.exercises = Object.keys(data).map((key)=>{return data[key]})
        console.log(this.exercises)
      });
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutProgram } from 'src/app/model/workout-program';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';

@Component({
  selector: 'app-assign-wprogram-to-customer',
  templateUrl: './assign-wprogram-to-customer.component.html',
  styleUrls: ['./assign-wprogram-to-customer.component.css']
})
export class AssignWorkoutProgramToCustomerComponent implements OnInit {
  customerId: number = -1
  wprograms: WorkoutProgram[] = []

  constructor(private route: ActivatedRoute, private ptService: PersonalTrainerService,
    private router: Router){}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.customerId = +idParam;
    }
    this.ptService.getWorkoutProgramsNotOfCustomer(this.customerId).subscribe((data: any) => {
      // Inizializza l'array exercises con il campo selected impostato su false per tutti gli esercizi
      this.wprograms = data.map((wprogram: WorkoutProgram) => ({ ...wprogram, selected: false }));
    });
  }

  assignSelectedWorkoutPrograms() {
    const selectedWorkoutPrograms = this.wprograms.filter(wprogram => wprogram.selected);
    for(let wp of selectedWorkoutPrograms){
      console.log("sto aggiornando il customer con id: ", this.customerId)
      console.log("sto aggiungendo il programma: ", wp)
      const response = this.ptService.assignWorkoutProgramToCustomer(this.customerId, wp).subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error: (error) => {
          console.log(error)
        }
      }
      )
      console.log(response)
    }
    this.router.navigate(['pt'])
  }

}
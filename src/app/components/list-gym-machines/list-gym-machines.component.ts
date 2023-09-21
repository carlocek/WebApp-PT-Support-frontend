import { Component } from '@angular/core';
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-list-gym-machines',
  templateUrl: './list-gym-machines.component.html',
  styleUrls: ['./list-gym-machines.component.css']
})
export class ListGymMachinesComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  machines: any

  constructor(private ptService: PersonalTrainerService){
    this.ptService.getGymMachines().subscribe((data:any) =>{
      this.machines = Object.keys(data).map((key)=>{return data[key]})
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }
}

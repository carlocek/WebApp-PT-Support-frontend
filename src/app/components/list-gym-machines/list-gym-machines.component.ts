import { Component } from '@angular/core';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-list-gym-machines',
  templateUrl: './list-gym-machines.component.html',
  styleUrls: ['./list-gym-machines.component.css']
})
export class ListGymMachinesComponent {
  machines: any

  constructor(private ptService: PersonalTrainerService){
    this.ptService.getGymMachines().subscribe((data:any) =>{
      this.machines = Object.keys(data).map((key)=>{return data[key]})
      console.log("Token preso dal local storage: ", localStorage.getItem('token'))
    })
  }
}

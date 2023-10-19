import { Component, Input } from '@angular/core';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pt-dashboard-toolbar',
  templateUrl: './pt-dashboard-toolbar.component.html',
  styleUrls: ['./pt-dashboard-toolbar.component.css']
})

export class PtDashboardToolbarComponent {
  @Input() isDashboard: any
  personalTrainer: any
  loggedEmail: any
  name: any
  surname: any

  constructor(private ptService: PersonalTrainerService, private router: Router){
    this.name = ''
    this.surname = ''

    if(localStorage.getItem('ptName') == null){
      this.takePtInfo()
    }else{
      this.name = localStorage.getItem('ptName')
      this.surname = localStorage.getItem('ptSurname')
    }
  }

  // ngOnInit(){
  //   if(localStorage.getItem('ptName') == null){
  //     this.takePtInfo()
  //   }else{
  //     this.name = localStorage.getItem('ptName')
  //     this.surname = localStorage.getItem('ptSurname')
  //   }
  // }

  takePtInfo(){
    console.log('Prendo le info del pt dal backend')
    this.loggedEmail = localStorage.getItem('ptEmail')
    this.ptService.getPersonalTrainer(this.loggedEmail).subscribe((data: any) =>{
      this.personalTrainer = Object.keys(data).map((key)=>{ return data[key]})
      // Orribile, bisognerebbe trovare un modo per impachettarlo in un oggetto PT
      localStorage.setItem('ptId', this.personalTrainer[2])
      localStorage.setItem('ptName', this.personalTrainer[3])
      localStorage.setItem('ptSurname', this.personalTrainer[5])
      console.log(this.personalTrainer)
      this.name = localStorage.getItem('ptName')
      this.surname = localStorage.getItem('ptSurname')
    })
    
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['home'])
  }

}

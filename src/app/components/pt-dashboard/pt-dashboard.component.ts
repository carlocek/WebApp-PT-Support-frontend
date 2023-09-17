import { Component } from '@angular/core'
import { PersonalTrainer } from 'src/app/model/personal-trainer'
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock'

@Component({
  selector: 'app-pt-dashboard',
  templateUrl: './pt-dashboard.component.html',
  styleUrls: ['./pt-dashboard.component.css']
})
export class PtDashboardComponent {
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0]
  
}
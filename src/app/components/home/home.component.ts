import { HttpResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tokenExpired: boolean = true
  tokenExpirationDate: Date | null = null;

  constructor(private ptService: PersonalTrainerService) {}

  ngOnInit() {
    const homeObservable = this.ptService.getGymMachines()

    homeObservable.subscribe({
      next: (response: HttpResponse<any>) => {
        if(response.status === 200){
          this.tokenExpired = false
        }
        else{
          this.tokenExpired = true
        }
        console.log("la richiesta ha raggiunto il backend, lo status della response è: ", response.status)
        console.log("tokenExpired è stato settato di conseguenza a: ", this.tokenExpired)
      
      },
      error: (error) => {
        console.error("Errore durante la richiesta al backend: ", error, "setto tokenExpired a true");
        this.tokenExpired = true;
        console.log("tokenExpired è stato settato di conseguenza a: ", this.tokenExpired)

        // Estrai la data di scadenza dal messaggio di errore
        const errorMessage = error.error;
        console.log(errorMessage)
        const expirationDateMatch = /JWT expired at (.+?)\./.exec(errorMessage);
        console.log(expirationDateMatch)
        if (expirationDateMatch && expirationDateMatch.length > 1) {
          const expirationDateString = expirationDateMatch[1];
          this.tokenExpirationDate = new Date(expirationDateString);
        }
      }
    });
  }
  
}

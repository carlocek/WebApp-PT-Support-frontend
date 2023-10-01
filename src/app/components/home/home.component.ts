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
  tokenNotPresent: boolean = true
  tokenExpirationDate: Date | null = null;

  customerLogged: boolean = !(localStorage.getItem("customerEmail") == null)
  ptLogged: boolean = !(localStorage.getItem("ptEmail") == null)

  constructor(private ptService: PersonalTrainerService) {}

  ngOnInit() {
    // if (localStorage.getItem('token') == null) {
    //   this.tokenNotPresent = true
    // }
    const homeObservable = this.ptService.ping()

    homeObservable.subscribe({
      next: (response: HttpResponse<any>) => {
        if(response.status === 200){
          this.tokenExpired = false
          this.tokenNotPresent = false
        }
        console.log("la richiesta ha raggiunto il backend, lo status della response è: ", response.status)
        console.log("tokenExpired è stato settato di conseguenza a: ", this.tokenExpired)
      
      },
      error: (error) => {
        console.error("Errore durante la richiesta al backend con status: ", error.status);
        // console.log("tokenExpired è stato settato di conseguenza a: ", this.tokenExpired)

        // Estrai la data di scadenza dal messaggio di errore
        const errorMessage = error.error;
        console.log(errorMessage)
        const expirationDateMatch = /JWT expired at (.+?)\./.exec(errorMessage);
        console.log(expirationDateMatch)
        if (expirationDateMatch && expirationDateMatch.length > 1) {
          this.tokenExpired = true
          this.tokenNotPresent = false
          console.log("Ho trovato una data di scadenza, tokenExpired settato a: ", this.tokenExpired)
          const expirationDateString = expirationDateMatch[1]
          this.tokenExpirationDate = new Date(expirationDateString)
        }
        else if (error.status === 401) {
          console.log("Token non presente nel localStorage, tokenNotPresent settato a: ", this.tokenNotPresent)
          this.tokenNotPresent = true
          this.tokenExpired = false
        }
      }
    });
  }
  
}

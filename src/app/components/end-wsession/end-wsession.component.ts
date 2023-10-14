import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { DexieService } from 'src/app/services/dexie-service.service';
import { ActivatedRoute } from '@angular/router';
import { WorkoutSession } from 'src/app/services/dexie-service.service';
import { HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-end-wsession',
  templateUrl: './end-wsession.component.html',
  styleUrls: ['./end-wsession.component.css']
})
export class EndWsessionComponent implements OnInit {
  wSession:any
  wSessionId:number = -1
  isLoading = true

  constructor(private dexieService: DexieService, private route: ActivatedRoute, 
    private customerService : CustomerService){
    
  }

  async ngOnInit(){
    let id = this.route.snapshot.paramMap.get('wsId')
    if(id)
      this.wSessionId = parseInt(id, 10)
    await this.dexieService.getWorkoutSession(this.wSessionId).then((ws) => {
      this.dexieService.endSession(ws)
    })
    await this.dexieService.getWorkoutSession(this.wSessionId).then((ws) => {
      this.wSession = ws
    })
    this.customerService.saveWorkoutSession(this.wSession).subscribe()
    // sendWithRetry
  }

  sendWithRetry(retryCount: number, retryDelay: number) {
    const observable = this.customerService.saveWorkoutSession(this.wSession)
    observable.subscribe({
      next: (response: HttpResponse<any>) => {
        if(response.status === 200){
          this.isLoading = false
        }
        console.log("la richiesta ha raggiunto il backend, lo status della response è: ", response.status)      
      },
      error: (error) => {
        console.error("Errore durante la richiesta al backend con status: ", error.status);
        // La richiesta non è andata a buon fine, ritenta dopo un certo ritardo
        if (retryCount > 0) {
          console.log(`Tentativo di ritentativo tra ${retryDelay} millisecondi.`);
          setTimeout(() => {
            this.sendWithRetry(retryCount - 1, retryDelay);
          }, retryDelay);
        } else {
          console.log('Numero massimo di tentativi raggiunto, i dati verranno salvati localmente.');
        }
      }
    })
  }

}

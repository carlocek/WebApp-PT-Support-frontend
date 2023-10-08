import { Component } from '@angular/core';
import { DexieService } from 'src/app/services/dexie-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-end-wsession',
  templateUrl: './end-wsession.component.html',
  styleUrls: ['./end-wsession.component.css']
})
export class EndWsessionComponent {
  wSession:any
  wSessionId:number = -1

  constructor(private dexieService: DexieService, private route: ActivatedRoute,){
    let id = this.route.snapshot.paramMap.get('wsId')
    if(id)
      this.wSessionId = parseInt(id, 10)
    this.dexieService.getWorkoutSession(this.wSessionId).then((ws) => {
      this.wSession = ws
    })
    
  }
}

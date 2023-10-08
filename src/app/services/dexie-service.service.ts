import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface WorkoutSession {
  id?: number 
  startTime: number
  endTime: number
  sessionData: SessionData[]
}

export interface SessionData {
  machineId:number
  load:number 
  repetitions:number
  timestamp:number
}

@Injectable({
  providedIn: 'root',
})

export class DexieService extends Dexie {
  wsessions!: Dexie.Table<WorkoutSession, number>

  constructor() {
    super('WorkoutSessionsDB'); // Specifica il nome del database
    this.version(1).stores({
      // Definisci gli store di oggetti e le chiavi primarie
      wsessions: '++id',
    });

    // Inizializza lo store "wsessions"
    this.wsessions = this.table('wsessions');
  }

  // Definisci metodi per eseguire operazioni su IndexedDB
  inizializeSession(){
    const id: number = Math.floor(Math.random() * 100000)
    const startTime: number = 18
    const endTime: number = 19
    let sessionData : SessionData[] = []
    let wsession: WorkoutSession = {id, startTime, endTime, sessionData}
    this.wsessions.add(wsession)
    return wsession
  }

  getWorkoutSession(wSessionId : number){
    return this.wsessions.get(wSessionId)
  }

  addSessionData(wSession : WorkoutSession | undefined, machineId:number, load:number , repetitions:number,
    timestamp:number){
    const data : SessionData = {machineId, load, repetitions, timestamp}
    if(wSession){
     wSession.sessionData.push(data)
     this.wsessions.update(wSession, wSession)
    }
    return(wSession)
  }
}
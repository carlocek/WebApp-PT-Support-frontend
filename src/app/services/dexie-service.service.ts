import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface WorkoutSession {
  id?: number 
  programName:string | null
  customerId: number
  startTime: string
  endTime: string
  sessionData: SessionData[]
}

export interface SessionData {
  exerciseName: string
  machineId:number
  load:number 
  repetitions:number
  timestamp:string
}

@Injectable({
  providedIn: 'root',
})

export class DexieService extends Dexie {
  wsessions!: Dexie.Table<WorkoutSession, number>
  db : any

  constructor() {
    super('WorkoutSessionsDB'); // Specifica il nome del database
    this.db = this
    this.version(1).stores({
      // Definisce gli store di oggetti e le chiavi primarie
      wsessions: '++id',
    });

    // Inizializza lo store "wsessions"
    this.wsessions = this.table('wsessions');
  }

  inizializeSession(programName:string | null, customerId: number){
    const id: number = Math.floor(Math.random() * 100000)
    const date = new Date()
    const startTime = date.toISOString()
    const endTime: string = ""
    let sessionData : SessionData[] = []
    let wsession: WorkoutSession = {id, customerId, programName, startTime, endTime, sessionData}
    this.wsessions.add(wsession)
    return wsession
  }

  async endSession(wSession : WorkoutSession | undefined){
    if(wSession){
      const date = new Date()
      const endTime = date.toISOString()
      wSession.endTime = endTime
      if(wSession.id)
        await this.wsessions.update(wSession.id, { endTime: endTime })

    }
    return wSession
  }

  getWorkoutSession(wSessionId : number){
    return this.wsessions.get(wSessionId)
  }

  addSessionData(wSession : WorkoutSession | undefined, exerciseName:string, machineId:number, load:number , 
    repetitions:number, timestamp:string){
    const data : SessionData = {machineId, exerciseName, load, repetitions, timestamp}
    if(wSession){
     wSession.sessionData.push(data)
     this.wsessions.update(wSession, wSession)
    }
    return(wSession)
  }

  deleteWorkoutSession(wSessionId:number){
    this.wsessions.delete(wSessionId)
  }
}
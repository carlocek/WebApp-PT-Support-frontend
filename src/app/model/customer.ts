import { PersonalTrainer } from './personal-trainer'

export class Customer {
  id: number
  personalTrainerId: number
  name: string
  surname: string
  email: string
  dateOfBirth: Date
  password: string
  personalTrainer : string
  workoutProgramList: string

  constructor(id: number, personalTrainerId:number, name: string, surname: string, email: string, dateOfBirth: Date, password: string, personalTrainer: string) {
    this.id = id
    this.personalTrainerId = personalTrainerId
    this.name = name
    this.surname = surname
    this.email = email
    this.dateOfBirth = dateOfBirth
    this.password = password
    this.personalTrainer = personalTrainer
    this.workoutProgramList = ''
  }
}

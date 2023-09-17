import { Customer } from './customer';

export class PersonalTrainer {
    id: number
    name: string
    surname: string
    email: string
    dateOfBirth: Date
    password: string
    customerList?: Customer[]
    // workoutProgramList: WorkoutProgram[]
  
    constructor(id: number, name: string, surname: string, email: string, dateOfBirth: Date, password: string, customerList?: Customer[]) {
      this.id = id
      this.name = name
      this.surname = surname
      this.email = email
      this.dateOfBirth = dateOfBirth
      this.password = password
      this.customerList = customerList
    //   this.workoutProgramList = []
    }
  }
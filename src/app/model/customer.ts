import { PersonalTrainer } from './personal-trainer';

export class Customer {
  id: number;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  personalTrainer?: PersonalTrainer;
//workoutProgramList: WorkoutProgram[];

  constructor(id: number, name: string, surname: string, email: string, dateOfBirth: Date, password: string, personalTrainer?: PersonalTrainer) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.personalTrainer = personalTrainer;
    // this.workoutProgramList = [];
  }
}

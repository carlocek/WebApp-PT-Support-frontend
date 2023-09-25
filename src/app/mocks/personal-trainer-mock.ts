import { PersonalTrainer } from './../model/personal-trainer'
import { CUSTOMERS } from 'src/app/mocks/customer-mock'

export const PERSONAL_TRAINERS: PersonalTrainer[] = [
{
  id: 40,
  name: 'Carlo',
  surname: 'Ceccherelli',
  email: 'pt@example.com',
  dateOfBirth: new Date('1998-10-13'),
  password: 'passwordPT',
  // customerList: CUSTOMERS,
},
];

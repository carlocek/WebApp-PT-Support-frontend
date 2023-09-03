import { Customer } from './../model/customer';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';

export const CUSTOMERS: Customer[] = [
  {
    id: 10,
    name: 'NomeCliente1',
    surname: 'CognomeCliente1',
    email: 'cliente1@example.com',
    dateOfBirth: new Date('1995-02-15'),
    password: 'passwordCliente1',
    // personalTrainer: PERSONAL_TRAINERS[0], 
  },
  {
    id: 11,
    name: 'NomeCliente2',
    surname: 'CognomeCliente2',
    email: 'cliente2@example.com',
    dateOfBirth: new Date('1988-07-10'),
    password: 'passwordCliente2',
    // personalTrainer: PERSONAL_TRAINERS[0], 
  },
];

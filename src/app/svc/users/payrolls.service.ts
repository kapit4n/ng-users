import { Injectable } from '@angular/core';
import { Payroll } from 'src/app/interfaces/users/payroll';

const PAYROLLS_DATA: Payroll[] = [
  { id: 1, amount: 2500, userId: 1, avatar: "https://qph.fs.quoracdn.net/main-qimg-be25dd757d712eba351982be4769bc4d" },
  { id: 2, amount: 2200, userId: 2, avatar: "https://qubit-labs.com/wp-content/uploads/2019/03/angular-salary.png" },
  { id: 3, amount: 2000, userId: 3, avatar: "https://qph.fs.quoracdn.net/main-qimg-be25dd757d712eba351982be4769bc4d" },
  { id: 4, amount: 1000, userId: 4, avatar: "https://qubit-labs.com/wp-content/uploads/2019/03/angular-salary.png" },
];

@Injectable({
  providedIn: 'root'
})
export class PayrollsService {

  constructor() { }

  list() {
    return PAYROLLS_DATA;
  }

  get(id: number) {
    return PAYROLLS_DATA.find(x => x.id === id)
  }
}

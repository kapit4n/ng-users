import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/users/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS_DATA: User[] = [
    { id: 1, displayName: 'Luis Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111" },
    { id: 2, displayName: "Samantha Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222' },
  ];

  constructor() { }

  list() {
    return this.USERS_DATA;
  }

  get(id: number) {
    return this.USERS_DATA.find(x => x.id === id);
  }
}

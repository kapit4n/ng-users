import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/users/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS_DATA: User[] = [
    { id: 1, displayName: 'Luis Arce', firstName: 'Luis', lastName: 'Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
    { id: 2., displayName: 'Samantha Arce', firstName: "Samantha", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png" },
    ];

  constructor() { }

  list() {
    return this.USERS_DATA;
  }

  get(id: number) {
    return this.USERS_DATA.find(x => x.id === id);
  }
}

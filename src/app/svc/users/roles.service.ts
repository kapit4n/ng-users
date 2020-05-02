import { Injectable } from '@angular/core';
import { Role } from 'src/app/interfaces/users/role'

const ROLES_DATA: Role[] = [
  { id: 1, name: 'Software developer', avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
  { id: 2, name: "Tester", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
];

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  list() {
    return ROLES_DATA;
  }

  get(id: number) {
    return ROLES_DATA.find(x => x.id === id)
  }
}

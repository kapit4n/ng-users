import { Injectable } from '@angular/core';
import { Role } from 'src/app/interfaces/users/role'

const ROLES_DATA: Role[] = [
  { id: 1, name: 'Software developer', avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
  { id: 2, name: 'Sr Software developer', avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
  { id: 3, name: "Quality Engineer", avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
  { id: 4, name: "Sr Quality Engineer", avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
  { id: 5, name: 'Scrum Master', avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
  { id: 6, name: 'Software Architecture', avatar: "https://img.pngio.com/role-png-png-image-role-png-2129_1874.png" },
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

import { Injectable } from '@angular/core';
import { Permission } from 'src/app/interfaces/users/permission';

const PERMISSIONS_DATA: Permission[] = [
  { id: 1, name: 'User create', avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
  { id: 2, name: "User update", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
];

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor() { }

  list() {
    return PERMISSIONS_DATA;
  }

  get(id: number) {
    return PERMISSIONS_DATA.find(x => x.id === id)
  }
}

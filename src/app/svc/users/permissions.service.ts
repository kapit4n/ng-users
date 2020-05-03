import { Injectable } from '@angular/core';
import { Permission } from 'src/app/interfaces/users/permission';

const PERMISSIONS_DATA: Permission[] = [
  { id: 1, name: 'User create', avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 2, name: "User Update", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 3, name: "User List", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 4, name: "User Delete", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 5, name: 'Role create', avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 6, name: "Role Update", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 7, name: "Role List", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 8, name: "Role Delete", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 9, name: 'Permission create', avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 10, name: "Permission Update", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 11, name: "Permission List", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
  { id: 12, name: "Permission Delete", avatar: "https://permissionmachine.com/wp-content/uploads/2018/02/LogoWhite.png" },
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

import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  displayName: string;
  address: string;
}

export interface UserConfig {
  type: string;
  name: string;
  label: string;
}

const USERS_DATA: User[] = [
  { id: 1, displayName: 'Luis Arce', address: 'Argentina st 1515' },
  { id: 2, displayName: "Samantha Arce", address: 'Chile st 1414' },
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['displayName', 'address', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = "/users"

  columnsConfig: UserConfig[] = [
    { type: 'text', name: 'displayName', label: 'Display Name' },
    { type: 'text', name: 'address', label: 'Address' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];
  dataSource = USERS_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

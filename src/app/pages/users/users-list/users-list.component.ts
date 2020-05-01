import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  displayName: string;
  email: string;
  address: string;
  phone: string;
}

export interface UserConfig {
  type: string;
  name: string;
  label: string;
}

const USERS_DATA: User[] = [
  { id: 1, displayName: 'Luis Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111" },
  { id: 2, displayName: "Samantha Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222' },
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  title: "Users List"
  displayedColumns: string[] = ['displayName', 'email', 'address', 'phone', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = ""

  columnsConfig: UserConfig[] = [
    { type: 'text', name: 'displayName', label: 'Display Name' },
    { type: 'text', name: 'email', label: 'email' },
    { type: 'text', name: 'address', label: 'Address' },
    { type: 'text', name: 'phone', label: 'Phone' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];

  dataSource = USERS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

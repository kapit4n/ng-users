import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users/user'
import { ColumnConfig } from 'src/app/interfaces/users/column-config'


const USERS_DATA: User[] = [
  { id: 1, firstName: 'Luis', lastName: 'Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
  { id: 2, firstName: "Samantha", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png" },
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
  basicPath = "/users"

  columnsConfig: ColumnConfig[] = [
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

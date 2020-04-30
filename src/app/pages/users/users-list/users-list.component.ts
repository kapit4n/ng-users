import { Component, OnInit } from '@angular/core';

export interface User {
  displayName: string;
  address: string;
}

const USERS_DATA: User[] = [
  { displayName: 'Luis Arce', address: 'Argentina st 1515' },
  { displayName: "Samantha Arce", address: 'Chile st 1414' },
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['displayName', 'address'];
  dataSource = USERS_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

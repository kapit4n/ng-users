import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users/user'
import { ColumnConfig } from 'src/app/interfaces/users/column-config'
import { UsersService } from 'src/app/svc/users/users.service';

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

  dataSource: User[];

  constructor(usersSvc: UsersService) {
    this.dataSource = usersSvc.list();
  }

  ngOnInit(): void {
  }

}

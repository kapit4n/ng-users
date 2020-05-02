import { Component, OnInit } from '@angular/core';

interface Role {
  id: number;
  name: string;
}

export interface ColumnConfig {
  type: string;
  name: string;
  label: string;
}

const ROLES_DATA: Role[] = [
  { id: 1, name: 'Software developer' },
  { id: 2, name: "Tester" },
];

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  title: "Roles List"
  displayedColumns: string[] = ['name', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = "/roles"

  columnsConfig: ColumnConfig[] = [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];

  dataSource = ROLES_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


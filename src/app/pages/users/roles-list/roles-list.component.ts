import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/users/role'
import { ColumnConfig } from 'src/app/interfaces/users/column-config'
import { RolesService } from 'src/app/svc/users/roles.service'

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

  dataSource: Role[];

  constructor(rolesSvc: RolesService) {
    this.dataSource = rolesSvc.list();
  }

  ngOnInit(): void {
  }

}


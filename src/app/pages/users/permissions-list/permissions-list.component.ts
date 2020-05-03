import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from 'src/app/interfaces/users/column-config'
import { PermissionsService } from 'src/app/svc/users/permissions.service';
import { Permission } from 'src/app/interfaces/users/permission';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css']
})
export class PermissionsListComponent implements OnInit {

  title: "Permission List"
  displayedColumns: string[] = ['name', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = "/permissions"

  columnsConfig: ColumnConfig[] = [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];

  dataSource: Permission[];

  constructor(svc: PermissionsService) {
    this.dataSource = svc.list();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from 'src/app/interfaces/users/column-config'
import { LeavesService } from 'src/app/svc/users/leaves.service';
import { Leave } from 'src/app/interfaces/users/leave';

@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.css']
})
export class LeavesListComponent implements OnInit {

  title: "Leave List"
  displayedColumns: string[] = ['period', 'userId', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = "/leaves"

  columnsConfig: ColumnConfig[] = [
    { type: 'text', name: 'period', label: 'Period' },
    { type: 'text', name: 'userId', label: 'UserId' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];

  dataSource: Leave[];

  constructor(svc: LeavesService) {
    this.dataSource = svc.list();
  }

  ngOnInit(): void {
  }

}

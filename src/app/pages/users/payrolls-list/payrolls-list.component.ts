import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from 'src/app/interfaces/users/column-config'
import { PayrollsService } from 'src/app/svc/users/payrolls.service';
import { Payroll } from 'src/app/interfaces/users/payroll';

@Component({
  selector: 'app-payrolls-list',
  templateUrl: './payrolls-list.component.html',
  styleUrls: ['./payrolls-list.component.css']
})
export class PayrollsListComponent implements OnInit {

  title: "Payroll List"
  displayedColumns: string[] = ['amount', 'userId', 'actions'];

  removeFunction = (id: number) => { }
  basicPath = "/payrolls"

  columnsConfig: ColumnConfig[] = [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'text', name: 'amount', label: 'User' },
    { type: 'text', name: 'userId', label: 'User' },
    { type: 'actions', name: 'actions', label: 'Actions' },
  ];

  dataSource: Payroll[];

  constructor(svc: PayrollsService) {
    this.dataSource = svc.list();
  }

  ngOnInit(): void {
  }

}

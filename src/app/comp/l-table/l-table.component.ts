import { Component, OnInit, Input } from '@angular/core';
import { ColumnConfig } from 'src/app/interfaces/users/column-config';

@Component({
  selector: 'app-l-table',
  templateUrl: './l-table.component.html',
  styleUrls: ['./l-table.component.css']
})
export class LTableComponent implements OnInit {
  
  @Input() basicPath;
  @Input() dataSource: any[];
  @Input() displayedColumns: string[];
  @Input() columnsConfig: ColumnConfig[];
  
  removeFunction = (id: number) => { }

  constructor() { }

  ngOnInit(): void {
  }

}

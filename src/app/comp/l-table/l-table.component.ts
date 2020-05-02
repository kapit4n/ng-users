import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-l-table',
  templateUrl: './l-table.component.html',
  styleUrls: ['./l-table.component.css']
})
export class LTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() title: string;
  @Input() basicPath;
  @Input() columnsConfig: any[];
  @Input() dataSource: any[];
  
  removeFunction = (id: number) => { }

  constructor() { }

  ngOnInit(): void {
  }

}

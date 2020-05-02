import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-l-table',
  templateUrl: './l-table.component.html',
  styleUrls: ['./l-table.component.css']
})
export class LTableComponent implements OnInit {
  
  @Input() basicPath;
  @Input() dataSource: any[];
  @Input() displayedColumns: string[];
  @Input() title: string;
  @Input() columnsConfig: any[];
  
  removeFunction = (id: number) => { }

  constructor() { }

  ngOnInit(): void {
  }

}

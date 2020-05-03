import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-l-select',
  templateUrl: './l-select.component.html',
  styleUrls: ['./l-select.component.css']
})
export class LSelectComponent implements OnInit {
  @Input() label: string;
  @Input() selected: number;
  @Input() dataSource: any[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-l-field',
  templateUrl: './l-field.component.html',
  styleUrls: ['./l-field.component.css']
})
export class LFieldComponent implements OnInit {

  @Input() model: any;
  @Input() type: string;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}

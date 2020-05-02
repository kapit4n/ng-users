import { Component, OnInit, Input } from '@angular/core';

interface FieldConfig {
  type: string;
  label: string;
}

@Component({
  selector: 'app-l-details',
  templateUrl: './l-details.component.html',
  styleUrls: ['./l-details.component.css']
})
export class LDetailsComponent implements OnInit {

  @Input() dataSource: any;
  @Input() displayedFields: string[];
  @Input() fieldConfigs: Map<string, FieldConfig>;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSave() {

  }

}

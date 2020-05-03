import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Leave } from 'src/app/interfaces/users/leave';
import { FieldConfig } from 'src/app/interfaces/users/field-config';
import { LeaveFields } from 'src/app/enums/users/leave-fields.enum';
import { LeavesService } from 'src/app/svc/users/leaves.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  dataSource: Leave;
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute, svc: LeavesService) {

    this.displayedFields = [LeaveFields.Period, LeaveFields.UserId];

    this.fieldConfigs.set(LeaveFields.Period, { type: 'text', label: 'Period' });
    this.fieldConfigs.set(LeaveFields.UserId, { type: 'text', label: 'UserId' });

    this.route.params.subscribe(params => {
      this.dataSource = svc.get(Number(params.id));
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.dataSource);
  }

}


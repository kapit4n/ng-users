import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Payroll } from 'src/app/interfaces/users/payroll';
import { FieldConfig } from 'src/app/interfaces/users/field-config';
import { PayrollFields } from 'src/app/enums/users/payroll-fields.enum';
import { PayrollsService } from 'src/app/svc/users/payrolls.service';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent implements OnInit {

  dataSource: Payroll;
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute, svc: PayrollsService) {

    this.displayedFields = [PayrollFields.Amount, PayrollFields.UserId];

    this.fieldConfigs.set(PayrollFields.Amount, { type: 'text', label: 'Amount' });
    this.fieldConfigs.set(PayrollFields.UserId, { type: 'text', label: 'User' });
    this.fieldConfigs.set(PayrollFields.Avatar, { type: 'img', label: 'Avatar' });

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


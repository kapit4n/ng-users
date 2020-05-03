import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Permission } from 'src/app/interfaces/users/permission';
import { FieldConfig } from 'src/app/interfaces/users/field-config';
import { PermissionFields } from 'src/app/enums/users/permission-fields.enum';
import { PermissionsService } from 'src/app/svc/users/permissions.service';

@Component({
  selector: 'app-permission-details',
  templateUrl: './permission-details.component.html',
  styleUrls: ['./permission-details.component.css']
})
export class PermissionDetailsComponent implements OnInit {

  dataSource: Permission;
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute, svc: PermissionsService) {

    this.displayedFields = [PermissionFields.Name];

    this.fieldConfigs.set(PermissionFields.Name, { type: 'text', label: 'Name' });
    this.fieldConfigs.set(PermissionFields.Avatar, { type: 'img', label: 'Avatar' });

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


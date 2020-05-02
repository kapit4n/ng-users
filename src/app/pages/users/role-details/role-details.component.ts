import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Role } from 'src/app/interfaces/users/role';
import { FieldConfig } from 'src/app/interfaces/users/field-config';
import { RoleFields } from 'src/app/enums/users/role-fields.enum';
import { RolesService } from 'src/app/svc/users/roles.service';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

  dataSource: Role;
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute, rolesSvc: RolesService) {

    this.displayedFields = [RoleFields.Name];

    this.fieldConfigs.set(RoleFields.Name, { type: 'text', label: 'Name' });
    this.fieldConfigs.set(RoleFields.Avatar, { type: 'img', label: 'Avatar' });

    console.log(this.fieldConfigs);

    this.route.params.subscribe(params => {
      this.dataSource = rolesSvc.get(Number(params.id));
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.dataSource);
  }

}


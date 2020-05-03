import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserFields } from 'src/app/enums/users/user-fields.enum';
import { FieldConfig } from 'src/app/interfaces/users/field-config';
import { User } from 'src/app/interfaces/users/user';
import { UsersService } from 'src/app/svc/users/users.service';
import { RolesService } from 'src/app/svc/users/roles.service';
import { Role } from 'src/app/interfaces/users/role';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  dataSource: User;
  role: Role;
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute, svc: UsersService, rolesSvc: RolesService) {

    this.displayedFields = [UserFields.FirstName, UserFields.LastName, UserFields.Email, UserFields.Address, UserFields.Phone];

    this.fieldConfigs.set(UserFields.FirstName, { type: 'text', label: 'First Name' });
    this.fieldConfigs.set(UserFields.LastName, { type: 'text', label: 'Last Name' });
    this.fieldConfigs.set(UserFields.Email, { type: 'email', label: 'Email' });
    this.fieldConfigs.set(UserFields.Address, { type: 'text', label: 'Address' });
    this.fieldConfigs.set(UserFields.Phone, { type: 'number', label: 'Phone' });
    this.fieldConfigs.set(UserFields.Avatar, { type: 'img', label: 'Avatar' });

    this.route.params.subscribe(params => {
      this.dataSource = svc.get(Number(params.id));
      this.role = rolesSvc.get(this.dataSource.roleId);
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.dataSource);
  }

}

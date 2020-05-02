import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface Role {
  id: number;
  name: string;
  avatar: string;
}

enum RoleFields {
  Name = "name",
  Avatar = "avatar",
}

interface FieldConfig {
  type: string;
  label: string;
}

const ROLES_DATA: Role[] = [
  { id: 1, name: 'Software developer', avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
  { id: 2, name: "Tester", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
];

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

  dataSource = ROLES_DATA[0];
  displayedFields: string[] = [];
  fieldConfigs = new Map<string, FieldConfig>();
  constructor(private route: ActivatedRoute) {

    this.displayedFields = [RoleFields.Name];

    this.fieldConfigs.set(RoleFields.Name, { type: 'text', label: 'Name' });
    this.fieldConfigs.set(RoleFields.Avatar, { type: 'img', label: 'Avatar' });

    console.log(this.fieldConfigs);

    this.route.params.subscribe(params => {
      this.dataSource = ROLES_DATA.find(x => x.id == Number(params.id));
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.dataSource);
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  avatar: string;
}

const USERS_DATA: User[] = [
  { id: 1, firstName: 'Luis', lastName: 'Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" },
  { id: 2, firstName: "Samantha", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png" },
];

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  dataSource = USERS_DATA[0];
  displayedFields: string[] = ['firstName', 'lastName', 'email', 'address', 'phone'];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.dataSource = USERS_DATA.find(x => x.id == Number(params.id));
    });
  }

  ngOnInit(): void {
  }

}

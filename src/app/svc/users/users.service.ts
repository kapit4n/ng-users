import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/users/user'

@Injectable()
export class UsersService {

  USERS_DATA: User[] = [
    { id: 1, displayName: 'Luis Arce', firstName: 'Luis', lastName: 'Arce', email: 'l@gmail.com', address: 'Argentina st 1515', phone: "1111111", avatar: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg", roleId: 1 },
    { id: 2, displayName: 'Samantha Arce', firstName: "Samantha", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png", roleId: 1 },
    { id: 3, displayName: 'Silvia Arce', firstName: "Silvia", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png", roleId: 3 },
    { id: 4, displayName: 'Maria Arce', firstName: "Maria", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png", roleId: 4 },
    { id: 5, displayName: 'Juan Arce', firstName: "Juan", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png", roleId: 2 },
    { id: 6, displayName: 'Pedro Arce', firstName: "Pedro", lastName: "Arce", email: 's@gmail.com', address: 'Chile st 1414', phone: '2222222', avatar: "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png", roleId: 1 },
  ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9000/api/v1/users");
  }

  getById(id: string | number): Observable<User> {
    return this.http.get<User>(`http://localhost:9000/api/v1/users/${id}`);
  }

}

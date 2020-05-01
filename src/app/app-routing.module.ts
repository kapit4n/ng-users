import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { RolesListComponent } from './pages/users/roles-list/roles-list.component';
import { RoleDetailsComponent } from './pages/users/role-details/role-details.component';


const routes: Routes = [
  {
    path: 'users',
    data: {
      breadcrumb: 'Users',
    },
    component: UsersComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: ''
        },
        component: UsersListComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
      },
    ]
  },
  {
    path: 'roles',
    component: RolesListComponent,
    data: {
      breadcrumb: 'Roles',
    },
  },
  {
    path: 'roles/:id',
    component: RoleDetailsComponent,
    data: {
      breadcrumb: 'Role Details',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

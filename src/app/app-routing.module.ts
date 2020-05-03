import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { RolesComponent } from './pages/users/roles/roles.component';
import { RolesListComponent } from './pages/users/roles-list/roles-list.component';
import { RoleDetailsComponent } from './pages/users/role-details/role-details.component';
import { PermissionsComponent } from './pages/users/permissions/permissions.component';
import { PermissionsListComponent } from './pages/users/permissions-list/permissions-list.component';
import { PermissionDetailsComponent } from './pages/users/permission-details/permission-details.component';
import { PayrollsComponent } from './pages/users/payrolls/payrolls.component';
import { PayrollsListComponent } from './pages/users/payrolls-list/payrolls-list.component';
import { PayrollDetailsComponent } from './pages/users/payroll-details/payroll-details.component';
import { LeavesComponent } from './pages/users/leaves/leaves.component';
import { LeavesListComponent } from './pages/users/leaves-list/leaves-list.component';
import { LeaveDetailsComponent } from './pages/users/leave-details/leave-details.component';

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
    data: {
      breadcrumb: 'Roles',
    },
    component: RolesComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: ''
        },
        component: RolesListComponent,
      },
      {
        path: ':id',
        component: RoleDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
      },
    ]
  },
  {
    path: 'permissions',
    data: {
      breadcrumb: 'Permissions',
    },
    component: PermissionsComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: ''
        },
        component: PermissionsListComponent,
      },
      {
        path: ':id',
        component: PermissionDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
      },
    ]
  },

  {
    path: 'payrolls',
    data: {
      breadcrumb: 'Payrolls',
    },
    component: PayrollsComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: ''
        },
        component: PayrollsListComponent,
      },
      {
        path: ':id',
        component: PayrollDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
      },
    ]
  },

  {
    path: 'leaves',
    data: {
      breadcrumb: 'Leaves',
    },
    component: LeavesComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: ''
        },
        component: LeavesListComponent,
      },
      {
        path: ':id',
        component: LeaveDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LTableComponent } from './comp/l-table/l-table.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { RolesListComponent } from './pages/users/roles-list/roles-list.component';
import { RoleDetailsComponent } from './pages/users/role-details/role-details.component';
import { BreadcrumbsComponent } from './comp/breadcrumbs/breadcrumbs.component';
import { UsersComponent } from './pages/users/users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LDetailsComponent } from './comp/l-details/l-details.component';
import { RolesComponent } from './pages/users/roles/roles.component';
import { PermissionsComponent } from './pages/users/permissions/permissions.component';
import { PermissionsListComponent } from './pages/users/permissions-list/permissions-list.component';
import { PermissionDetailsComponent } from './pages/users/permission-details/permission-details.component';
import { LFieldComponent } from './comp/l-field/l-field.component';
import { LSelectComponent } from './comp/l-select/l-select.component';
import { MatSelectModule } from '@angular/material/select';
import { PayrollsComponent } from './pages/users/payrolls/payrolls.component';
import { LeavesComponent } from './pages/users/leaves/leaves.component';
import { LeavesListComponent } from './pages/users/leaves-list/leaves-list.component';
import { LeaveDetailsComponent } from './pages/users/leave-details/leave-details.component';
import { PayrollsListComponent } from './pages/users/payrolls-list/payrolls-list.component';
import { PayrollDetailsComponent } from './pages/users/payroll-details/payroll-details.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { PermissionCreateComponent } from './pages/users/permission-create/permission-create.component';

import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EntityStoreModule } from './store/entity-store.module'

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:9000/api/v1',
  timeout: 3000, // request timeout
}

@NgModule({
  declarations: [
    AppComponent,
    LTableComponent,
    UsersListComponent,
    UserDetailsComponent,
    RolesListComponent,
    RoleDetailsComponent,
    BreadcrumbsComponent,
    UsersComponent,
    LDetailsComponent,
    RolesComponent,
    PermissionsComponent,
    PermissionsListComponent,
    PermissionDetailsComponent,
    LFieldComponent,
    LSelectComponent,
    PayrollsComponent,
    LeavesComponent,
    LeavesListComponent,
    LeaveDetailsComponent,
    PayrollsListComponent,
    PayrollDetailsComponent,
    UserCreateComponent,
    PermissionCreateComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EntityDataModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule,
    EntityStoreModule,

  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LTableComponent } from './comp/l-table/l-table.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { RolesListComponent } from './pages/users/roles-list/roles-list.component';
import { RoleDetailsComponent } from './pages/users/role-details/role-details.component';
import { BreadcrumbsComponent } from './comp/breadcrumbs/breadcrumbs.component';
import { UsersComponent } from './pages/users/users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LDetailsComponent } from './comp/l-details/l-details.component';
import { RolesComponent } from './pages/users/roles/roles.component';

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
    RolesComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

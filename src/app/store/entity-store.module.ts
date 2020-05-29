import { EntityDataService, DefaultDataServiceConfig } from '@ngrx/data'; // <-- import the NgRx Data data service registry

import { UsersService } from '../svc/users/users.service';
import { NgModule } from '@angular/core';


const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:9000/api/v1',
    timeout: 3000, // request timeout
  }

@NgModule({
  imports: [],
  providers: [ UsersService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig } ] // <-- provide the data service

})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    userDataService: UsersService,
  ) {
    // entityDataService.registerService('User', userDataService); // <-- register it
  }
}
import { EntityDataService } from '@ngrx/data'; // <-- import the NgRx Data data service registry

import { UsersService } from '../svc/users/users.service';
import { NgModule } from '@angular/core';

@NgModule({
  // imports: [ ... ],
  providers: [ UsersService ] // <-- provide the data service
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    userDataService: UsersService,
  ) {
    entityDataService.registerService('User', userDataService); // <-- register it
  }
}
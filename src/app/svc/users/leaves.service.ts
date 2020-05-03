import { Injectable } from '@angular/core';
import { Leave } from 'src/app/interfaces/users/leave';

const LEAVES_DATA: Leave[] = [
  { id: 1, period: '1d', userId: 1 },
  { id: 2, period: '3d', userId: 3 },
  { id: 3, period: '1w', userId: 4 },
];

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor() { }

  list() {
    return LEAVES_DATA;
  }

  get(id: number) {
    return LEAVES_DATA.find(x => x.id === id)
  }
}

import { Injectable } from '@angular/core';
import { userData, userData2 } from '../mocks/fake-data';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserData(): User {
    return userData();
  }

  getUserData2(): User {
    return userData2;
  }

}

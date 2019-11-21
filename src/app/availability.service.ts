import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
priviledges: any[] = [
  {name:'name1', canAccess: true},
  {name:'name2', canAccess: true},
  {name:'name3', canAccess: true},
  {name:'name4', canAccess: true},
  {name:'name5', canAccess: true},
  {name:'name6', canAccess: true},
  {name:'name7', canAccess: true},
  {name:'name8', canAccess: true},
  {name:'name8', canAccess: false},
]
  constructor() { }

  getPrivileges() {
    return of(this.priviledges);
  }
}

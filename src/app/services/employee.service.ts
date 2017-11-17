import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Employee } from '../models/employee';
import { log } from 'util';
// SERVICES
import { AuthService } from './auth.service';


@Injectable()
export class EmployeeService {
  employee = {} as Employee;
  employee$: FirebaseListObservable<any[]>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUserId;
  }

  create(employee: Employee) {
    // read item list
    this.read();
    // push new item
    this.employee$.push(employee);
  }

  read() {
    // read all collections in node employee
    this.employee$ = this.db.list(`employees/${this.currentUser}`);
    return this.employee$;
  }

  readByKey(key) {
    // read by key in node employee
    let exit: any;
    exit = this.db.object(`employees/${this.currentUser}/${key}`);
    return exit;
  }

  update(employee) {
    this.db.object(`employees/${this.currentUser}/${employee.$key}`).set(employee);
  }

  delete(employee) {
    // delete item
    this.employee$.remove(employee.$key);
  }
}

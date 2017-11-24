import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
// SERVICES
import { AuthService } from './auth.service';

@Injectable()
export class WorkOrderService {
  order = {} as Order;
  order$: FirebaseListObservable<any[]>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUserId;
    console.log(this.auth.currentUserId);
  }

  create(order: Order) {
    // read item list
    this.read();
    // push new item
    console.log(order);
    this.order$.push(order);
  }

  read() {
    // read all collections in node order
    this.order$ = this.db.list(`order/${this.currentUser}`);
    return this.order$;
  }

  readByKey(key) {
    // read by key in node order
    let exit: any;
    exit = this.db.object(`order/${this.currentUser}/${key}`);
    return exit;
  }

  update(order) {
    this.db.object(`order/${this.currentUser}/${order.$key}`).set(order);
  }

  delete(order) {
    // delete item
    this.order$.remove(order.$key);
  }

}

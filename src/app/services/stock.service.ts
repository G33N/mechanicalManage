import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Stock } from '../models/stock';
// SERVICES
import { AuthService } from './auth.service';

@Injectable()
export class StockService {
  stock = {} as Stock;
  stock$: FirebaseListObservable<any[]>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUserId;
    console.log(this.auth.currentUserId);
  }

  create(stock: Stock) {
    // read item list
    this.read();
    // push new item
    this.stock$.push(stock);
  }

  read() {
    // read all collections in node stock
    this.stock$ = this.db.list(`stock/${this.currentUser}`);
    return this.stock$;
  }

  readByKey(key) {
    // read by key in node stock
    let exit: any;
    exit = this.db.object(`stock/${this.currentUser}/${key}`);
    return exit;
  }

  update(stock) {
    this.db.object(`stock/${this.currentUser}/${stock.$key}`).set(stock);
  }

  delete(stock) {
    // delete item
    this.stock$.remove(stock.$key);
  }

}

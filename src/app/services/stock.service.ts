import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Stock } from '../models/stock';

@Injectable()
export class StockService {
  stock = {} as Stock;
  stock$: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  create(stock: Stock) {
    // read item list
    this.read();
    // push new item
    this.stock$.push(stock);
  }

  read() {
    // read all collections in node stock
    this.stock$ = this.db.list(`stock`);
    return this.stock$;
  }

  readByKey(key) {
    // read by key in node stock
    let exit: any;
    exit = this.db.object(`stock/${key}`);
    return exit;
  }

  update(stock) {
    this.db.object(`stock/${stock.$key}`).set(stock);
  }

  delete(stock) {
    // delete item
    this.stock$.remove(stock.$key);
  }




}

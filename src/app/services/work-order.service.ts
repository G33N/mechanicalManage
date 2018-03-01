import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
import { Item } from '../models/item';
import { Stock } from './../models/stock';
// SERVICES
import { AuthService } from './auth.service';
import { StockService } from './stock.service';
import { FirebaseObjectFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class WorkOrderService {
  order = {} as Order;
  order$: FirebaseListObservable<any[]>;
  item = {} as Item;
  item$: FirebaseListObservable<Item[]>;
  stock = {} as Stock;
  stock$: FirebaseListObservable<Stock[]>;
  auxStock: FirebaseObjectObservable<Stock>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
    private stockService: StockService
  ) {
    this.currentUser = this.auth.currentUserId;
    console.log(this.auth.currentUserId);
  }

  create(order: Order) {
    // read item list
    this.read();
    // push new item
    this.order$.push(order);
  }

  createItem(order, items) {
    // add item to node /order/item
    this.item$ = this.db.list(`order/${this.currentUser}/${order.$key}/items`);
    this.item$.push(items);
  }
  deleteItem(order, item) {
    // add item to node /order/item
    this.item$ = this.db.list(`order/${this.currentUser}/${order.$key}/items`);
    this.item$.remove(item);
    console.log(this.item$);
  }
  read() {
    // read all collections in node order
    this.order$ = this.db.list(`order/${this.currentUser}`);
    return this.order$;
  }

  readItem(key) {
    // read all collections in node order
    this.item$ = this.db.list(`order/${this.currentUser}/${key}/items`);
    return this.item$;
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

  updateStock(item) {
    let stock: Stock;
    this.auxStock = this.stockService.readByKey(item.key);
    this.auxStock.subscribe(snapshot => {
      stock = snapshot;
    });
    stock.quantity = (stock.quantity - item.quantity);

    this.stockService.update(stock);
  }

  delete(order) {
    // delete item
    this.order$.remove(order.$key);
  }

}

import { log } from 'util';
import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
import { Client } from './../models/client';
import { Item } from './../models/item';
// SERVICES
import { WorkOrderService } from './../services/work-order.service';
import { ClientService } from './../services/client.service';
import { StockService } from './../services/stock.service';
import { Stock } from './../models/stock';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {
  order = {} as Order;
  order$: FirebaseListObservable<Order[]>;
  client = {} as Client;
  client$: FirebaseListObservable<Client>;
  item = {} as Item;
  item$: FirebaseListObservable<Item[]>;
  stock = {} as Stock;
  auxStock = {} as Stock;
  auxStock$: FirebaseObjectObservable<Stock>;
  stock$: FirebaseListObservable<Stock[]>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private workOrderService: WorkOrderService,
    private clientService: ClientService,
    private stockService: StockService
  ) {
    const date = Date.now();
    console.log(date);
  }

  ngOnInit() {
    this.readOrder();
    this.readStock();
  }

  readOrder() {
    this.order$ = this.workOrderService.read();
  }
  readItem(order) {
    this.item$ = this.workOrderService.readItem(order.$key);
  }
  readStock() {
    this.stock$ = this.stockService.read();
  }
  readClientBykey(key) {
    this.client$ = this.clientService.readByKey(key);
    this.client$.subscribe(snapshot => {
      this.client = snapshot;
    });
    return this.client;
  }
  readStockBykey(key) {
    this.auxStock$ = this.stockService.readByKey(key);
    this.auxStock$.subscribe(snapshot => {
      this.auxStock = snapshot;
    });
    return this.auxStock;
  }
  update(order) {
    this.router.navigate([`/content/work-order/update`, { key: order.$key }]);
  }
  closeOrder(order) {
    order.outDate = Date.now();
    // console.log(order);
    this.workOrderService.update(order);
    this.router.navigate([`/content/order/read`]);
  }
  createItem(order) {
    this.workOrderService.createItem(order, this.item);
    this.workOrderService.updateStock(this.item);
    this.item = { key: '', quantity: 0 };
  }
  deleteItem(order, item) {
    this.workOrderService.deleteItem(order, item);
  }
  print(order) {
    this.router.navigate([`/content/work-order/print`, { key: order.$key }]);
  }
  delete(order) {
    this.workOrderService.delete(order);
  }

}

import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
import { Client } from './../models/client';
import { Item } from './../models/item';
// SERVICES
import { WorkOrderService } from './../services/work-order.service';
import { ClientService } from './../services/client.service';
import { StockService } from './../services/stock.service';
// JSPDF
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-work-order-print',
  templateUrl: './work-order-print.component.html',
  styleUrls: ['./work-order-print.component.scss']
})
export class WorkOrderPrintComponent implements OnInit {
  order = {} as Order;
  order$: FirebaseListObservable<Order>;
  client = {} as Client;
  client$: FirebaseListObservable<Client>;
  items = {} as Item[];
  items$: FirebaseListObservable<Item[]>;
  orderKey: string;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private workOrderService: WorkOrderService,
    private clientService: ClientService,
    private stockService: StockService
  ) {

  }

  ngOnInit() {
    this.readOrder(this.getRouteParams());
    this.readClient();
  }

  print(order) {
    const element = document.getElementById('renderthis');

    const pdf = new jsPDF('p', 'pt', 'a4');

    const w = element.clientWidth;
    const h = element.clientHeight;
    const newCanvas = document.createElement('canvas');
    newCanvas.width = w * 2;
    newCanvas.height = h * 2;
    newCanvas.style.width = w + 'px';
    newCanvas.style.height = h + 'px';
    const context = newCanvas.getContext('2d');
    context.scale(2, 2);

    pdf.addHTML(element, { }, function () {
      // var out = pdf.output('dataurlnewwindow'); // crashed if bigger file
      pdf.save(`ORDEN-${order.$key}.pdf`);
    });
    // const render = document.getElementById('renderthis');
    // const pdf = new jsPDF();
    // pdf.addHTML(render, {}, function () {
    //   pdf.save(`ORDEN-${order.$key}.pdf`);
    // });
  }

  readOrder(key) {
    this.order$ = this.workOrderService.readByKey(key);
    this.order$.subscribe(snapshot => {
      this.order = snapshot;
      this.readItems(this.order);
    });
  }

  readItems(order) {
    this.items$ = this.workOrderService.readItem(order.$key);
    this.items$.subscribe(snapshot => {
      this.items = snapshot;
    });
  }

  readClient() {
    this.client$ = this.clientService.readByKey(this.order.client);
    this.client$.subscribe(snapshot => {
      this.client = snapshot;
    });
  }

  getRouteParams() {
    // READ ROUTE PARAMS
    let param: any;
    this.route.params.subscribe((params: Order) => param = params);
    this.orderKey = param.key;
    return param.key;
  }

}

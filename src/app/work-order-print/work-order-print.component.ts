import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
// SERVICES
import { WorkOrderService } from './../services/work-order.service';
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
  orderKey: string;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private workOrderService: WorkOrderService
  ) {
    this.read(this.getRouteParams());
  }

  ngOnInit() {
  }

  print(order) {
      const render = document.getElementById('renderthis');
      const pdf = new jsPDF();
      pdf.addHTML(render, {}, function () {
        pdf.save('test.pdf');
      });
  }
  read(key) {
    this.order$ = this.workOrderService.readByKey(key);
    console.log(this.order$.subscribe(snapshot => {
      this.order = snapshot;
    }));
  }
  getRouteParams() {
    // READ ROUTE PARAMS
    let param: any;
    this.route.params.subscribe((params: Order) => param = params);
    this.orderKey = param.key;
    return param.key;
  }
}

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
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {

  order = {} as Order;
  order$: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private workOrderService: WorkOrderService
  ) {

    this.read();

  }

  ngOnInit() {
  }

  read() {
    this.order$ = this.workOrderService.read();
  }
  update(order) {
    this.router.navigate([`/content/work-order/update`, { key: order.$key }]);
  }
  print(order) {
    this.router.navigate([`/content/work-order/print`, { key: order.$key }]);
  //   const render = document.getElementById('renderthis');
  //   const pdf = new jsPDF();
  //   pdf.addHTML(render, {}, function () {
  //     pdf.save('test.pdf');
  //   });
  }
  delete(order) {
    this.workOrderService.delete(order);
  }


}

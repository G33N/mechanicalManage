import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
// SERVICES
import { WorkOrderService } from './../services/work-order.service';

@Component({
  selector: 'app-work-order-modify',
  templateUrl: './work-order-modify.component.html',
  styleUrls: ['./work-order-modify.component.scss']
})
export class WorkOrderModifyComponent implements OnInit {
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

  update(order) {
    this.workOrderService.update(order);
    this.router.navigate([`/content/order/read`]);
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

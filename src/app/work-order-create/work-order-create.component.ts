import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Order } from '../models/order';
import { Employee } from './../models/employee';
import { Client } from './../models/client';
// SERVICES
import { WorkOrderService } from './../services/work-order.service';
import { ClientService } from './../services/client.service';
import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-work-order-create',
  templateUrl: './work-order-create.component.html',
  styleUrls: ['./work-order-create.component.scss']
})
export class WorkOrderCreateComponent implements OnInit {
  order = {} as Order;
  order$: FirebaseListObservable<Order[]>;
  client = {} as Client;
  client$: FirebaseListObservable<Client[]>;
  employee = {} as Employee;
  employee$: FirebaseListObservable<Employee[]>;
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private workOrderService: WorkOrderService,
    private clientService: ClientService,
    private employeeService: EmployeeService
  ) {
    this.readClient();
    this.readEmployee();
    this.order.state = 'Activo';
  }

  ngOnInit() {
  }

  create(order) {
    console.log(order);
    this.workOrderService.create(order);
    this.router.navigate([`/content/work-order/read`]);
  }

  readClient() {
    this.client$ = this.clientService.read();
  }

  readEmployee() {
    this.employee$ = this.employeeService.read();
  }


}

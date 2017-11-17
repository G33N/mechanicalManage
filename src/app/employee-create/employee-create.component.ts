import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Employee } from '../models/employee';
// SERVICES
import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})

export class EmployeeCreateComponent implements OnInit {

  employee = {} as Employee;
  employee$: FirebaseListObservable<Employee[]>;
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  create(employee) {
    this.employeeService.create(employee);
    this.router.navigate([`/content/employee/read`]);
  }

}

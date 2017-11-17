import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Employee } from '../models/employee';
// SERVICES
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee = {} as Employee;
  employee$: FirebaseListObservable<Employee[]>;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private employeeService: EmployeeService) {
      this.read();
    }

  ngOnInit() {
  }

  read() {
    this.employee$ = this.employeeService.read();
  }
  update(employee) {
    this.router.navigate([`/content/employee/update`, { key: employee.$key }]);
  }
  delete(employee) {
    this.employeeService.delete(employee);
  }
}

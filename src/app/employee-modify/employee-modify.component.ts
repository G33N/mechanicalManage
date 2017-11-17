import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// MODELS
import { Employee } from '../models/employee';
// SERVICES
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.scss']
})

export class EmployeeModifyComponent implements OnInit {
  employee = {} as Employee;
  employee$: FirebaseObjectObservable<Employee>;
  employeeKey: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private employeeService: EmployeeService
  ) {
    this.read(this.getRouteParams());
  }

  ngOnInit() {
  }

  update(employee) {
    this.employeeService.update(employee);
    this.router.navigate([`/content/employee/read`]);
  }
  read(key) {
    this.employee$ = this.employeeService.readByKey(key);
    console.log(this.employee$.subscribe(snapshot => {
      this.employee = snapshot;
    }));
  }
  getRouteParams() {
    // READ ROUTE PARAMS
    let param: any;
    this.route.params.subscribe((params: Employee) => param = params);
    this.employeeKey = param.key;
    return param.key;
  }
}

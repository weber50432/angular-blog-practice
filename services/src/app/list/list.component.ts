import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  template: `
  <h2>Employee List </h2>
  <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
  </ul>
  
  `,
  styleUrls: []
})
export class ListComponent implements OnInit {

  public  employees = [] as any;
  
  constructor( private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

}

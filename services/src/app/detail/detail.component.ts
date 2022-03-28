import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detail',
  template:`
  <h2>Employee Detail</h2>  
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: []
})
export class DetailComponent implements OnInit {

  public employees = [] as any;
  
  constructor( private _employeeService : EmployeeService ) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }


}

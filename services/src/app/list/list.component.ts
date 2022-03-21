import { Component, OnInit } from '@angular/core';

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

  public employees = [
    {"id" :1 ,"name":"Andrew","age":30},
    {"id" :2 ,"name":"weber","age":25},
    {"id" :3 ,"name":"Alex","age":31},
    {"id" :4 ,"name":"christina","age":28},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

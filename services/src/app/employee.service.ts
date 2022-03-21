import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return[
      {"id" :1 ,"name":"Andrew","age":30},
      {"id" :2 ,"name":"weber","age":25},
      {"id" :3 ,"name":"Alex","age":31},
      {"id" :4 ,"name":"christina","age":28},
    ];
  }
}

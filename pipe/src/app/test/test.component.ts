import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name|lowercase}}</h2>
    <h2>{{name|uppercase}}</h2>
    <h2>{{message|titlecase}}</h2>
    <h2>{{person| json}}</h2>
    <p>{{pi | number:'1.3-4'}}</p>
    <p>{{date}}</p>
    <p>{{date| date:'short'}}</p>
    <p>{{date| date:'medium'}}</p>
    <p>{{date| date:'long'}}</p>
    <p>{{date| date:'shortDate'}}</p>
    <p>{{date| date:'shortTime'}}</p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public message = "Welcome to codevolution";
  public person = {
    "firstName" : "John",
    "lastName": "Doe"
  }
  pi: number = 3.14;
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

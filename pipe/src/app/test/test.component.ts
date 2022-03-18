import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name|lowercase}}</h2>
    <h2>{{name|uppercase}}</h2>
    <h2>{{message|titlecase}}</h2>
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
  constructor() { }

  ngOnInit(): void {
  }

}

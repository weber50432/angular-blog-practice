import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected department with id = {{departmentId}}
    </h3>
    <a >Previous</a>
    <a >Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId : any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
      let id = 0;
      this.departmentId = id;
  }

}

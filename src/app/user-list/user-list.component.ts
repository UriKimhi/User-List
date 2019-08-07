import { MyService } from './../my.service';
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  constructor(private myService: MyService) { }
  employe;
  urik: Employee = {name: null,salary:null,age:null}; 
  columnsToDisplay = ["id","employee_name","employee_salary","employee_age"];
  expandedElement: Employee | null;
  ngOnInit() {
    this.myService.GetEmployees().subscribe(e => this.employe = e);
  }

}
export interface Employee {
  name: string;
  salary: number;
  age: number;
};
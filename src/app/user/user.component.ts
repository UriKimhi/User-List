import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  @Input() employee: Employee;
  @Input() col: string;
}
export interface Employee {
  name:string;
  age:number;
  id: any;

}
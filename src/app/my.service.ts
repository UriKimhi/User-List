
import { Employee } from './user/user.component';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }
  GetEmployees(): Observable<Employee> {
    return this.http.get<Employee>('http://dummy.restapiexample.com/api/v1/employees');
  }
  // Post() {
  //   this.http.post('http://dummy.restapiexample.com/api/v1/create', this.urik)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }
}

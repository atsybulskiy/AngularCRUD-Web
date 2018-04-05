import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  public employeeList: Employee[];

  constructor(private http: HttpClient) {
  }

  getEmployeeList() {
    return this.http.get<Employee[]>(
      'http://localhost:4210/api/Employee')
      .toPromise().then(x => {
        this.employeeList = x;
      });
  }

  postEmployee(emp: Employee) {
    const headerOptions = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(
      'http://localhost:4210/api/Employee',
      {...emp},
      {
        headers: headerOptions
      });
  }

  putEmployee(id, emp) {
    const headerOptions = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(
      `http://localhost:4210/api/Employee/${id}`,
      {...emp},
      {
        headers: headerOptions
      });
  }

  deleteEmployee(id: number) {
    return this.http.delete(
      `http://localhost:4210/api/Employee/${id}`
    );
  }
}

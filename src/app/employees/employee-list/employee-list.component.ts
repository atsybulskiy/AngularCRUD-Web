import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import {EmployeeDto} from '../../../api/EmployeeDto';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: EmployeeDto[];

  constructor(private employeeService: EmployeeService,
              private toastr: ToastrService) {
  }

  async ngOnInit() {
    await this.employeeService.getEmployeeList();
    console.log(this.employeeService.getEmployeeList());
  }

  showForEdit(emp: Employee) {
    this.employeeService.selectedEmployee = {...emp};
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe(async () => {
          await this.employeeService.getEmployeeList();
          this.toastr.warning('Deleted Successfully', 'Employee Register');
        });
    }
  }
}

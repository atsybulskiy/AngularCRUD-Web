import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import {EmployeeService} from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this.employeeService.postEmployee(form.value)
        .subscribe(async () => {
          this.resetForm(form);
          await this.employeeService.getEmployeeList();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        });
    } else {
      this.employeeService.putEmployee(form.value.EmployeeID, form.value)
        .subscribe(async () => {
          this.resetForm(form);
          await this.employeeService.getEmployeeList();
          this.toastr.info('Record Updated Successfully!', 'Employee Register');
        });
    }
  }
}

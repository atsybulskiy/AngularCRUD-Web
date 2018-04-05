import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderComponent} from './common/components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

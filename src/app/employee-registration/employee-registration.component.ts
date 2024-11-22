import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  empName: string='';
  role: string='';
  employees:any = [];

add(){
  let employee ={
    name: this.empName,
    role: this.role
  }
  this.employees.push(employee)

}

}

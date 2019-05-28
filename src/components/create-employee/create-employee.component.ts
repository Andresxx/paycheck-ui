import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public employeeType:string;
  public employee:any;
  constructor() { }

  ngOnInit() {
    this.employee = {
      name : '',
      ci : '', 
      type : 'fijo',
      salary: '',
      percentage: ''
    }
    // this.employeeType = "tiempo completo";
  }

  
  print(){
    console.log(this.employee)
  }

}

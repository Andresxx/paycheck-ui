import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public employee:any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = {
      nombre: "",
      ci: "",
      tipoDeEmpleado: "fijo",
      metodoDePago: "efectivo",
      notificacionDePago: "mail",
      salario: 0,
      porcentajeDeComision: 0
    }
  }

  
  crateEmployee(){
    console.log(this.employee);
    this.employeeService.post("createEmployee",this.employee).subscribe(res=>{
      console.log(res);
    })
  }

}

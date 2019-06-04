import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public employee:any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.employee = {
      nombre: "",
      ci: "",
      tipoDeEmpleado: "fijo",
      metodoDePago: "efectivo",
      notificacionDePago: "mail",
      salario: '',
      porcentajeDeComision: ''
    }
  }

  
  crateEmployee(){
    console.log(this.employee);
    this.httpService.post("createEmployee",this.employee).subscribe(res=>{
      console.log(res);
    })
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  public employee:any;
  private employeeSubscription : Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.initializeEmployee();
  }

  ngOnDestroy(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
  }

  initializeEmployee(){
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
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
    this.httpService.post("new-employee",this.employee).subscribe(res=>{
      // console.log(res);
      this.initializeEmployee();
    })
  }

}

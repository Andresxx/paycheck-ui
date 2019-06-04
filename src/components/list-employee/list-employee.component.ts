import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/services/http.service';
import { Router } from '@angular/router';
import { injectRootLimpMode } from '@angular/core/src/di/injector_compatibility';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit, OnDestroy {

  private employeeSubscription : Subscription;
  public listOfEmployees : any;
  public employee:any;
  constructor(private httpService: HttpService, private router : Router) { }

  ngOnInit() {
    this.requestListOfemployees();
    this.initializeEmployee();
  }
   
  ngOnDestroy(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
  }

  requestListOfemployees(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
    this.employeeSubscription = this.httpService.get('employees').subscribe(response =>{
      this.listOfEmployees = this.parseResponse(response);
    })
  }
  


  parseResponse(object) {
    let response = [];
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            response.push(object[prop]);
        }
    }
    return response;
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


  navigateTo(view){
    this.router.navigate(['/' + view]);
  }

    crateEmployee(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
    this.httpService.post("new-employee",this.employee).subscribe(res=>{
      this.requestListOfemployees();
      this.initializeEmployee();
    })
  }

  
  capitalizeFirstPipe(value: string, args: any[]): string {

    return value.charAt(0).toUpperCase() + value.slice(1);
  }



}

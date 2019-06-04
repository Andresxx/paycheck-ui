import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  private employeeSubscription : Subscription;
  public listOfEmployees : any;

  constructor(private httpService: HttpService, private router : Router) { }

  ngOnInit() {
    // if(this.employeeSubscription)
    //   this.employeeSubscription.unsubscribe();
    // this.employeeSubscription = this.httpService.get('employees').subscribe(response =>{
    //   console.log(response);
      
    // })

    this.listOfEmployees = {
      "-LgQCWWn9hqpbPsxqJSg": {
          "calculadoraDeSalario": {
              "monto": 400
          },
          "ci": "8794212",
          "email": "mail",
          "metodoDePago": "efectivo",
          "nombre": "Juan perez"
      },
      "-LgQH51B9Bweol3WxkCf": {
          "calculadoraDeSalario": {
              "monto": 400
          },
          "ci": "8794212",
          "email": "mail",
          "metodoDePago": "efectivo",
          "nombre": "Sergio Perez"
      }
    }
    this.listOfEmployees = this.parseResponse(this.listOfEmployees);
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


  navigateTo(view){
    this.router.navigate(['/' + view]);
  }





}

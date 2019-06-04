import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit, OnDestroy {

  private employeeSubscription : Subscription;
  public listOfEmployees : any;

  constructor(private httpService: HttpService, private router : Router) { }

  ngOnInit() {
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
    this.employeeSubscription = this.httpService.get('employees').subscribe(response =>{
      this.listOfEmployees = this.parseResponse(response);
    })
  }
   
  ngOnDestroy(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
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

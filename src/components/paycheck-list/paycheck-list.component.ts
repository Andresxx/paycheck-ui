import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paycheck-list',
  templateUrl: './paycheck-list.component.html',
  styleUrls: ['./paycheck-list.component.css']
})
export class PaycheckListComponent implements OnInit {

  private ticketSubscription : Subscription;
  public listOfTickets: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

      // if(this.employeeSubscription)
    //   this.employeeSubscription.unsubscribe();
    // this.employeeSubscription = this.httpService.get('employees').subscribe(response =>{
    //   console.log(response);
      
    // })

    this.listOfTickets = {
      "-LgQCWWn9hqpbPsxqJSg": {
        "nombre": "Juan perez",
        "ci": "8794212",
        "salario":"500",
        "fecha":"08-09-19"
      },
      "-LgQH51B9Bweol3WxkCf": {
        "nombre": "Juan perez",
        "ci": "8794212",
        "salario":"500",
        "fecha":"08-09-19"
      }
    }

    this.listOfTickets = this.parseResponse(this.listOfTickets);
    console.log(this.listOfTickets);

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
}

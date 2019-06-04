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
    this.generateAllTickets();
  }

  generateAllTickets(){
    if(this.ticketSubscription)
      this.ticketSubscription.unsubscribe();
    this.ticketSubscription = this.httpService.get('paychecks').subscribe(response =>{
      this.listOfTickets = this.parseResponse(response);
    })
  }

  generateTicketsOfTheDay(){
    if(this.ticketSubscription)
      this.ticketSubscription.unsubscribe();
    this.ticketSubscription = this.httpService.get('paychecksOfTheDay').subscribe(response =>{
      this.listOfTickets = this.parseResponse(response);
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
}

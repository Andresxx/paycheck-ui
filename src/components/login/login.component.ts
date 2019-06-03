import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SercurityService } from 'src/services/sercurity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private securityService:SercurityService) { }

  ngOnInit() {
  }


  login(){
    this.router.navigate(['/listEmployee']);
    this.securityService.login();
  }
}

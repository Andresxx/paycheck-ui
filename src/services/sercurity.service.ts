import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SercurityService {

  public isLogged: boolean;
  constructor() { }

  logout(){
    this.isLogged = false;
    localStorage.setItem('logged','false');
  }

  login(){
    this.isLogged = true;
    localStorage.setItem('logged','true');
  }
}

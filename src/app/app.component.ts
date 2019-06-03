import { Component } from '@angular/core';
import { SercurityService } from 'src/services/sercurity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paychek-ui';
  public navBarIsVisible: boolean; 
  constructor( private securityService: SercurityService ) { 
    this.isLogged();
  }

  isLogged(){
    if(localStorage.getItem('logged') == 'false')
      this.navBarIsVisible = true;
    else
      this.navBarIsVisible = false;
    
  }


}


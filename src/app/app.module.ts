import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { PaycheckListComponent } from '../components/paycheck-list/paycheck-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CreateEmployeeComponent,
    PaycheckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

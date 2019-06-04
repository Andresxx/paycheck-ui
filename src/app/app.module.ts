import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { PaycheckListComponent } from '../components/paycheck-list/paycheck-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { BsModalModule } from 'ng2-bs3-modal';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CreateEmployeeComponent,
    PaycheckListComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { CreateEmployeeComponent } from 'src/components/create-employee/create-employee.component';
import { PaycheckListComponent } from 'src/components/paycheck-list/paycheck-list.component';
import { listenToElementOutputs } from '@angular/core/src/view/element';
import { ListEmployeeComponent } from 'src/components/list-employee/list-employee.component';



const routes: Routes = [
  { path: '', redirectTo: '/listEmployee', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createEmployee', component: CreateEmployeeComponent },  
  { path: 'generatePaycheck', component: PaycheckListComponent },
  { path: 'listEmployee', component: ListEmployeeComponent },

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

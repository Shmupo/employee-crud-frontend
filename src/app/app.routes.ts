import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ModifyEmployeeComponent } from './components/modify-employee/modify-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

export const routes: Routes = [
    {path: '', component: EmployeeListComponent },
    {path: 'modify-page/:id', component: ModifyEmployeeComponent},
    {path: 'create-employee-page', component: CreateEmployeeComponent},
];

import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'] // Corrected from styleUrl to styleUrls
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((response: any) => {
      this.employees = response;
    });
  }

  updateEmployee(id: number, employee: any) {
    this.employeeService.updateEmployee(id, employee);
  }

  selectEmployee(id: number) {
    this.router.navigateByUrl(`modify-page/${id}`)
  }
}

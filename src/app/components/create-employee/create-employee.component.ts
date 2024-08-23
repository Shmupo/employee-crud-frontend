import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service'; // Adjust the path if necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onCreateSubmit(): void {
    if (this.createForm.valid) {
      this.employeesService.createEmployee(this.createForm.value).subscribe(
        response => {
          console.log('Employee created successfully', response);
          this.router.navigateByUrl(''); // back to home
        },
        error => {
          console.error('Error creating employee', error);
        }
      );
    }
  }
}

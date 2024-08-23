import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  updateForm: FormGroup;
  employee: any;
  @Input() employeeId: number | null = -1;

  employeeFound: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeesService, 
    private route: ActivatedRoute, 
    private router: Router) {

    this.updateForm = this.fb.group({
      firstName: new FormControl(null, []),
      lastName: new FormControl(null, []),
      email: new FormControl(null, []),
      salary: new FormControl(null, []),
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get("id")
      this.employeeId = idParam ? +idParam : null;
    })

    this.employeeService.getEmployeeById(this.employeeId).subscribe((response) => {
      this.employee = response
    })

    if (this.employee !== null) {
      this.employeeFound = true;
    }
  }
  
  onUpdateSubmit() {
    if (this.updateForm.valid) {
      this.employeeService.updateEmployee(this.employeeId, this.updateForm.value).subscribe(response => {
        console.log('Employee updated successfully', response);
        
        alert('Employee updated successfully!')
        this.router.navigateByUrl(''); // return home

      }, error => {
        console.error('Error updating employee', error);
      });
    }
  }

  onDeleteHandler() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(() => {
      alert('Employee deleted successfully!')
      this.router.navigateByUrl(''); // return home
    }, error => {
      console.error('Error deleting employee', error)
    })
  }
}

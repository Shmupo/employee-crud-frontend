import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any> {
    return this.http.get<any[]>('http://localhost:8080/api/employees')
  }

  getEmployeeById(id: number | null): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8080/api/employees/${id}`)
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post<any[]>(`http://localhost:8080/api/employees`, employee)
  }

  updateEmployee(id: number | null, employee: any): Observable<any>  {
    return this.http.put<any[]>(`http://localhost:8080/api/employees/${id}`, employee)
  }

  deleteEmployee(id: number | null): Observable<any> {
    return this.http.delete<any[]>(`http://localhost:8080/api/employees/${id}`)
  }
}



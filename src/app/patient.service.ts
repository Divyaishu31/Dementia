import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // public getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  // }

  public getPatientByUHID(uhid: string) {
    return this.http.get<Patient>(`${this.apiServerUrl}/getPatientByUHID/${uhid}`);
  }

  // public addEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  // }

  public addToQ(pid: string) {
    return this.http.post<string>(`${this.apiServerUrl}/addToQ/`, pid);
  }

  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  // }

  public removeFromQ(pid: string) {
    return this.http.post<string>(`${this.apiServerUrl}/removeFromQ/`, pid);
  }

  // public deleteEmployee(employeeId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  // }

  public getAllPatientInQ() {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/getAllPatientInQ`);
  }

  public getPatientDemographic(pid: string) {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/getPatientDemographic/${pid}`);
  }

  public addVisitDetails(visitDetails: Map<string, string>) {
    return this.http.post<string>(`${this.apiServerUrl}/addVisitDetails`, visitDetails);
  }

  public getPatientVisitDetails(visitDetails: Map<string, string>) {
    return this.http.get<string>(`${this.apiServerUrl}/getPatientDemographic/addVisitDetails`);
  }

  // `/getActivityDetails/{pid}`
  // input - pid
  // output - list of activity record of that patient







}

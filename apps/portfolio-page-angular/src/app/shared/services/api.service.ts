import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${environment.api}/projects`);
  }
}

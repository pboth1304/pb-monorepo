import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWebsite } from '@pb-monorepo/shared/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private results$: Observable<IWebsite[]>; // TODO as behaviour subject

  constructor(private readonly http: HttpClient) {}

  public getResults$(): Observable<IWebsite[]> {
    return this.results$;
  }

  public search(searchVal: string): Observable<IWebsite[]> {
    this.http
      .get<IWebsite[]>(`${environment.API_BASE_URL}/search?q=${searchVal}`)
      .subscribe(console.log);
    return this.http.get<IWebsite[]>(
      `${environment.API_BASE_URL}/search?q=${searchVal}`
    );
  }
}

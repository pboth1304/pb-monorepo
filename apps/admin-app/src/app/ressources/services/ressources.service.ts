import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RessourceListItem } from '@pb-monorepo/shared/models';
import { environment } from '../../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  constructor(private readonly httpClient: HttpClient) {}

  public getRessources(): Observable<RessourceListItem[]> {
    return this.httpClient.get<RessourceListItem[]>(
      `${environment.API_BASE_URL}/ressources`
    );
  }

  public getRessourceById(id: string): Observable<RessourceListItem> {
    return this.httpClient.get<RessourceListItem>(
      `${environment.API_BASE_URL}/ressources/${id}`
    );
  }

  public createRessource(ressource: RessourceListItem): Observable<string> {
    return this.httpClient.post<string>(
      `${environment.API_BASE_URL}/ressources`,
      ressource
    );
  }
}

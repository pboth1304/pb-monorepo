import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RessourceListItem } from '@pb-monorepo/shared/models';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RessourcesService } from '../../services/ressources.service';

@Component({
  selector: 'pb-ressource-detail',
  templateUrl: './ressource-detail.component.html',
  styleUrls: ['./ressource-detail.component.scss']
})
export class RessourceDetailComponent implements OnInit, OnDestroy {
  public ressource$: Observable<RessourceListItem>;

  private ressourceId: string;
  private readonly onDestroy = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly ressourcesService: RessourcesService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroy))
      .subscribe(paramMap => (this.ressourceId = paramMap.get('ressourceId')));

    this.ressource$ = this.ressourcesService.getRessourceById(this.ressourceId);
  }

  ngOnDestroy() {
    /**
     * Unsubscribe from subscriptions.
     */
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}

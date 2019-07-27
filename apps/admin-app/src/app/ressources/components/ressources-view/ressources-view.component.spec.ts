/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesViewComponent } from './ressources-view.component';
import {
  Input,
  Component,
  NgModule,
  Output,
  EventEmitter
} from '@angular/core';
import {
  RessourceListItem,
  FilterTag,
  SubnavConfig
} from '@pb-monorepo/shared/models';
import { CommonModule } from '@angular/common';
import { RessourcesService } from '../../services/ressources.service';
import { DialogService } from '@pb-monorepo/shared/angular-material';
import { of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * Fake Ressource List Item component for Unit test.
 */
@Component({ selector: 'pb-ressource-list-item', template: '' })
class FakeRessourceListItem {
  @Input()
  public ressourceListItem: RessourceListItem;
}

/**
 * Fake Title component for Unit test.
 */
@Component({ selector: 'pb-title', template: '' })
class FakeTitle {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;
}

/**
 * Fake Subnav component for Unit test.
 */
@Component({ selector: 'pb-subnav', template: '' })
class FakeSubnav {
  @Output()
  public submitSearchValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public selectedFilterValue: EventEmitter<FilterTag> = new EventEmitter<
    FilterTag
  >();

  @Output()
  public openModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  public subnavConfig: SubnavConfig;

  @Input()
  public filters: FilterTag[];
}

/**
 * Ressources Testing Module
 */
@NgModule({
  declarations: [FakeRessourceListItem, FakeSubnav, FakeTitle],
  imports: [CommonModule],
  exports: [FakeRessourceListItem, FakeSubnav, FakeTitle]
})
export class RessourcesTestingModule {}

describe('RessourcesViewComponent', () => {
  let component: RessourcesViewComponent;
  let fixture: ComponentFixture<RessourcesViewComponent>;

  beforeEach(async(() => {
    const ressourcesMock = { getRessources: () => of([]) };
    const dialogMock = { openDialog: component => undefined };

    TestBed.configureTestingModule({
      declarations: [RessourcesViewComponent],
      imports: [RessourcesTestingModule],
      providers: [
        { provide: RessourcesService, useValue: ressourcesMock },
        { provide: DialogService, useValue: dialogMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

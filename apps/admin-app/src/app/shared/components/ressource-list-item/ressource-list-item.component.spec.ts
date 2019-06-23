/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RessourceListItemComponent } from './ressource-list-item.component';

describe('RessourceListItemsComponent', () => {
  let component: RessourceListItemComponent;
  let fixture: ComponentFixture<RessourceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceListItemComponent);
    component = fixture.componentInstance;
    component.ressourceListItem = {
      title: 'Test',
      description: 'Test description',
      link: 'www.google.de'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

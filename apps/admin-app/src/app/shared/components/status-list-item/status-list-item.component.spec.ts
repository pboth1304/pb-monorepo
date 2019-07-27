/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusListItemComponent } from './status-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StatusListItemComponent', () => {
  let component: StatusListItemComponent;
  let fixture: ComponentFixture<StatusListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusListItemComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListItemComponent);
    component = fixture.componentInstance;
    component.statusListItem = {
      status: 'Online',
      serviceTitle: 'Test',
      serviceDescription: 'Test description',
      lastStatusCheck: new Date()
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

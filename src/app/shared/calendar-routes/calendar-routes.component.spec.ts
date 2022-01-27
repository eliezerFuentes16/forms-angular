import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRoutesComponent } from './calendar-routes.component';

describe('CalendarRoutesComponent', () => {
  let component: CalendarRoutesComponent;
  let fixture: ComponentFixture<CalendarRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

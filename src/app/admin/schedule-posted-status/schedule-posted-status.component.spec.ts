import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePostedStatusComponent } from './schedule-posted-status.component';

describe('SchedulePostedStatusComponent', () => {
  let component: SchedulePostedStatusComponent;
  let fixture: ComponentFixture<SchedulePostedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePostedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

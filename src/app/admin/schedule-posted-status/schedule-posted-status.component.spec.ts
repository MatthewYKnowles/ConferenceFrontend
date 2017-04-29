import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePostedStatusComponent } from './schedule-posted-status.component';
import {HttpModule} from '@angular/http';

describe('SchedulePostedStatusComponent', () => {
  let component: SchedulePostedStatusComponent;
  let fixture: ComponentFixture<SchedulePostedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePostedStatusComponent ],
      imports: [HttpModule]
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

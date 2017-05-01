import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TwoDigitsPipe} from '../two-digits.pipe';
import {HttpModule, XHRBackend} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {MockBackend} from "@angular/http/testing";

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent, TwoDigitsPipe ],
      imports: [RouterTestingModule, HttpModule ],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

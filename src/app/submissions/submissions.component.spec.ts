import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsComponent } from './submissions.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TwoDigitsPipe} from '../two-digits.pipe';
import {HttpModule} from '@angular/http';

describe('SubmissionsComponent', () => {
  let component: SubmissionsComponent;
  let fixture: ComponentFixture<SubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsComponent, TwoDigitsPipe ],
      imports: [RouterTestingModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

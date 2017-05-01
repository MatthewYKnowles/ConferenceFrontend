import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsComponent } from './submissions.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TwoDigitsPipe} from '../two-digits.pipe';
import {HttpModule, XHRBackend} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SubmissionService} from '../services/submission.service';
import {MockBackend} from "@angular/http/testing";

describe('SubmissionsComponent', () => {
  let component: SubmissionsComponent;
  let fixture: ComponentFixture<SubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsComponent, TwoDigitsPipe ],
      imports: [RouterTestingModule, HttpModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
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

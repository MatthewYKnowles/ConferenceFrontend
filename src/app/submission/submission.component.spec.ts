import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {SubmissionService} from '../services/submission.service';
import {Observable} from 'rxjs/Observable';
import {MockBackend} from '@angular/http/testing';
import Spy = jasmine.Spy;

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;
  let submissionService: SubmissionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend }, SubmissionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    submissionService = fixture.debugElement.injector.get(SubmissionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message warning when trying to submit without all fields filled in', () => {
    component.submission.FirstName = 'Test First Name';
    component.submitSubmission();
    expect(component.requiredFieldsEmpty).toBeTruthy();
  });

  it('should post the submission if all required fields are filled in', () => {
    const spy: Spy = spyOn(submissionService, 'postSubmission').and.returnValue(Observable.of({}));
    component.submission.FirstName = 'Test First Name';
    component.submission.LastName = 'Test Last Name';
    component.submission.Email = 'Test Email';
    component.submission.SubmissionTitle = 'Test Abstract Title';
    component.submission.SubmissionAbstract = 'Test Abstract';
    component.submitSubmission();
    expect(component.requiredFieldsEmpty).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });
});

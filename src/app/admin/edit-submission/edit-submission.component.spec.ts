import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSubmissionComponent } from './edit-submission.component';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MockBackend} from '@angular/http/testing';
import {Submission} from '../../models/submission';
import Spy = jasmine.Spy;
import {SubmissionService} from '../../services/submission.service';

describe('EditSubmissionComponent', () => {
  let component: EditSubmissionComponent;
  let fixture: ComponentFixture<EditSubmissionComponent>;
  let submissionService: SubmissionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmissionComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
          params: Observable.of({submissionId: '1'})
        }
        },
        { provide: XHRBackend, useClass: MockBackend },
        SubmissionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmissionComponent);
    component = fixture.componentInstance;
    submissionService = fixture.debugElement.injector.get(SubmissionService);
    fixture.detectChanges();
  });

  it('should display error message if a required field is not filled in', () => {
    component.submission = new Submission();
    component.submission.StartTimeInHours = 15;
    component.updateSubmission();
    expect(component.showErrorMessage).toBeTruthy();
  });

  it('should update submission if all required fields are filled in', () => {
    const spy: Spy = spyOn(submissionService, 'putSubmission').and.returnValue(Observable.of({}));
    component.submission = new Submission();
    component.submission.StartTimeInHours = 11;
    component.submission.EndTimeInHours = 13;
    component.submission.Room = 'Green';
    component.updateSubmission();
    expect(component.showErrorMessage).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it('should reset the submissions scheduling fields', () => {
    component.submission = new Submission();
    component.submission.StartTimeInMinutes = 15;
    component.submission.StartTimeInHours = 11;
    component.submission.EndTimeInHours = 13;
    component.submission.EndTimeInMinutes = 45;
    component.submission.Room = 'Green';
    component.unScheduleSubmission();
    expect(component.submission.Room).toBe(null);
    expect(component.submission.StartTimeInHours).toBe(0);
    expect(component.submission.StartTimeInMinutes).toBe(0);
    expect(component.submission.EndTimeInHours).toBe(0);
    expect(component.submission.EndTimeInMinutes).toBe(0);
  });
});

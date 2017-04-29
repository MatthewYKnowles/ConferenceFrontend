import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSubmissionComponent } from './edit-submission.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RouterTestingModule} from '@angular/router/testing';
import {Submission} from '../../models/submission';

describe('EditSubmissionComponent', () => {
  let component: EditSubmissionComponent;
  let fixture: ComponentFixture<EditSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmissionComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  let params: Observable<string>;
  beforeEach(() => {
    params = Observable.of({});
    fixture = TestBed.createComponent(EditSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the submissions scheduling fields', () => {
    component.submission = new Submission();
    component.submission.StartTimeInMinutes = 15;
    component.submission.StartTimeInHours = 11;
    component.submission.EndTimeInHours = 13;
    component.submission.EndTimeInMinutes = 45;
    component.submission.Room = 'Green';
    component.unscheduleSubmission();
    expect(component.submission.Room).toBe(null);
    expect(component.submission.StartTimeInHours).toBe(0);
    expect(component.submission.StartTimeInMinutes).toBe(0);
    expect(component.submission.EndTimeInHours).toBe(0);
    expect(component.submission.EndTimeInMinutes).toBe(0);
  });
});

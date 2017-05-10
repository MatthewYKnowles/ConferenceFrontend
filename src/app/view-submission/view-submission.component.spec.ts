import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ViewSubmissionComponent} from './view-submission.component';
import {TwoDigitsPipe} from '../pipes/two-digits.pipe';
import {BaseRequestOptions, Http, HttpModule, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

describe('ViewSubmissionComponent', () => {
  let component: ViewSubmissionComponent;
  let fixture: ComponentFixture<ViewSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubmissionComponent, TwoDigitsPipe],
      imports: [HttpModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
          params: Observable.of({submissionId: '1'})
          }
        },
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

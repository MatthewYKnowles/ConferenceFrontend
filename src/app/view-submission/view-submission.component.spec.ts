import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSubmissionComponent } from './view-submission.component';
import {TwoDigitsPipe} from '../two-digits.pipe';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('ViewSubmissionComponent', () => {
  let component: ViewSubmissionComponent;
  let fixture: ComponentFixture<ViewSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubmissionComponent, TwoDigitsPipe ],
      imports: [HttpModule, RouterTestingModule]
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

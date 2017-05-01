import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {SubmissionService} from "../services/submission.service";
import {Observable} from "rxjs/Observable";
import {MockBackend} from "@angular/http/testing";

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
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

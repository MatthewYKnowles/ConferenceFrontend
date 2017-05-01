import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmissionsStatusComponent } from './submissions-status.component';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from "@angular/http/testing";

describe('SubmissionsStatusComponent', () => {
  let component: SubmissionsStatusComponent;
  let fixture: ComponentFixture<SubmissionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsStatusComponent ],
      imports: [HttpModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

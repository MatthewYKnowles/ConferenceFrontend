import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationComponent } from './admin-navigation.component';
import {SubmissionService} from '../../services/submission.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpModule} from '@angular/http';

describe('AdminNavigationComponent', () => {
  let component: AdminNavigationComponent;
  let fixture: ComponentFixture<AdminNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionService],
      declarations: [ AdminNavigationComponent ],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

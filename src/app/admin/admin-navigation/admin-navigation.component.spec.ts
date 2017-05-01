import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationComponent } from './admin-navigation.component';
import 'rxjs/add/observable/of';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('AdminNavigationComponent', () => {
  let component: AdminNavigationComponent;
  let fixture: ComponentFixture<AdminNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavigationComponent ],
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend }
      ]
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

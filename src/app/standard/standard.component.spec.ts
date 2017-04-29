import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardComponent } from './standard.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';

describe('StandardComponent', () => {
  let component: StandardComponent;
  let fixture: ComponentFixture<StandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardComponent, NavigationComponent ],
      imports: [RouterTestingModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardComponent } from './standard.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from "@angular/http/testing";

describe('StandardComponent', () => {
  let component: StandardComponent;
  let fixture: ComponentFixture<StandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardComponent, NavigationComponent ],
      imports: [RouterTestingModule, HttpModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
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

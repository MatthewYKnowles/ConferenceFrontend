import {TestBed, inject} from '@angular/core/testing';

import {SubmissionService} from './submission.service';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('SubmissionService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [SubmissionService, {provide: XHRBackend, useClass: MockBackend}],
      imports: [HttpModule]
    });
  });

  it('should create service',
    inject([XHRBackend, SubmissionService], (mockBackend: MockBackend, service: SubmissionService) => {
    expect(service).toBeTruthy();
  }));

  it('should get submissions with a query string for sorted',
    inject([XHRBackend, SubmissionService], (mockBackend: MockBackend, service: SubmissionService) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toBe('http://localhost:59335/api/submissions?sorted=true');
    });
    service.getAllSubmissionsSorted();
  }));

  it('should get submissions with a query string for sorted',
    inject([XHRBackend, SubmissionService], (mockBackend: MockBackend, service: SubmissionService) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toBe('http://localhost:59335/api/schedulePosted');
      expect(connection.request.text()).toBe('{"Status":"not posted"}');
    });
    service.removeSchedule();
  }));
});

import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Submission} from '../models/submission';

@Injectable()
export class SubmissionService {
  public _url = 'http://localhost:59335/api/';
  public _submissionsUrl = this._url + 'submissions';
  private _headers: any = new Headers({'Content-Type': 'application/json'});
  private _options: any;

  constructor(private _http: Http) {
    this._options = new RequestOptions({headers: this._headers});
  }

  getSubmission(id: string): Observable<any> {
    return this._http.get(this._submissionsUrl + '/'  + id, this._options)
      .map((response: Response) => response.json());
  }

  putSubmission(submission: Submission): Observable<any> {
    return this._http.put(this._submissionsUrl + '/' + submission.Id, JSON.stringify(submission), this._options);
  }

  postSubmission(submission: Submission): Observable<any> {
    return this._http.post(this._submissionsUrl, JSON.stringify(submission), this._options);
  }

  getSubmissionsStatus() {
    return this._http.get(this._submissionsUrl + 'Status', this._options)
      .map((response: Response) => response.json());
  }

  closeSubmissions() {
    const submissionStatus: any = {};
    submissionStatus.Status = 'closed';
    return this._http.post(this._submissionsUrl + 'Status', JSON.stringify(submissionStatus), this._options);
  }

  openSubmissions() {
    const submissionStatus: any = {};
    submissionStatus.Status = 'open';
    return this._http.post(this._submissionsUrl + 'Status', JSON.stringify(submissionStatus), this._options);
  }

  deleteSubmission(id: string) {
    return this._http.delete(this._submissionsUrl + '/' + id, this._options);
  }

  getSchedulePostedStatus() {
    return this._http.get(this._url + 'scheduleposted', this._options)
      .map((response: Response) => response.json());
  }

  postSchedule() {
    const schedulePostedStatus: any = {};
    schedulePostedStatus.Status = 'posted';
    return this._http.post(this._url + 'scheduleposted', JSON.stringify(schedulePostedStatus), this._options);
  }

  removeSchedule() {
    const schedulePostedStatus: any = {Status: 'not posted'};
    return this._http.post(this._url + 'schedulePosted', JSON.stringify(schedulePostedStatus), this._options);
  }

  getAllSubmissionsSorted() {
    return this._http.get(this._submissionsUrl + '?sorted=true', this._options)
      .map((response: Response) => response.json());
  }
}

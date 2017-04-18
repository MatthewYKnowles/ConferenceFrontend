import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Submission} from '../models/submission';

@Injectable()
export class SubmissionService {
  public _url = 'http://localhost:51508/api/submissions';
  private _headers: any = new Headers({'Content-Type': 'application/json'});
  private _options: any;

  constructor(private _http: Http) {
    this._options = new RequestOptions({headers: this._headers});
  }

  getAllSubmissions(): Observable<any> {
    return this._http.get(this._url, this._options)
      .map((response: Response) => response.json());
  }

  getSubmission(id: string): Observable<any> {
    return this._http.get(this._url + '/'  + id, this._options)
      .map((response: Response) => response.json());
  }

  putSubmission(submission: Submission): Observable<any> {
    return this._http.put(this._url + '/' + submission.Id, JSON.stringify(submission), this._options);
  }

  postSubmission(submission: Submission): Observable<any> {
    return this._http.post(this._url, JSON.stringify(submission), this._options);
  }

  getSubmissionsStatus() {
    return this._http.get(this._url + 'Status', this._options)
      .map((response: Response) => response.json());
  }

  closeSubmissions() {
    const submissionStatus: any = {};
    submissionStatus.Status = 'closed';
    return this._http.post(this._url + 'Status', JSON.stringify(submissionStatus), this._options);
  }

  openSubmissions() {
    const submissionStatus: any = {};
    submissionStatus.Status = 'open';
    return this._http.post(this._url + 'Status', JSON.stringify(submissionStatus), this._options);
  }
}

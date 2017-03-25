import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Submission} from '../models/submission';

@Injectable()
export class SubmissionService {
  public _url = 'http://localhost:54356/api/submissions/';
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
    return this._http.get(this._url + id, this._options)
      .map((response: Response) => response.json());
  }

  postSubmission(firstName: string, lastName: string, company: string, email: string, bio: string, submissionTitle: string,
                 submissionAbstract: string): void {
    const submission: Submission = new Submission();
    submission.FirstName = firstName;
    submission.LastName = lastName;
    submission.Company = company;
    submission.Email = email;
    submission.Bio = bio;
    submission.SubmissionTitle = submissionTitle;
    submission.SubmissionAbstract = submissionAbstract;
    this._http.post(this._url, JSON.stringify(submission), this._options).subscribe();
  }
}

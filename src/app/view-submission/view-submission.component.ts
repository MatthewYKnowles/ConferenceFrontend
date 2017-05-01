import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';

@Component({
  selector: 'app-view-submission',
  templateUrl: './view-submission.component.html',
  styleUrls: ['./view-submission.component.css'],
  providers: [SubmissionService]
})
export class ViewSubmissionComponent implements OnInit {
  submission: Submission;

  constructor(private _route: ActivatedRoute, private _submissionService: SubmissionService) { }

  ngOnInit() {
    this.setSubmission();
  }

  private setSubmission() {
    this._route.params.subscribe(params => {
      this._submissionService.getSubmission(params['submissionId']).subscribe((submission) => {
        this.submission = submission;
      });
    });
  }

}

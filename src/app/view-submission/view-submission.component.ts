import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  id: string;

  constructor(private route: ActivatedRoute, private _submissionService: SubmissionService, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._submissionService.getSubmission(this.id).subscribe((submission) => {
      this.submission = submission;
    });
  }

}

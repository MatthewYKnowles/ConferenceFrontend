import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../services/submission.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
  providers: [SubmissionService]
})
export class SubmissionsComponent implements OnInit {
  submissions: any;

  constructor(private _submissionService: SubmissionService) {}

  ngOnInit() {
    this.setSubmissions();
  }

  private setSubmissions() {
    this._submissionService.getAllSubmissionsSorted().subscribe((submissions) => {
      this.submissions = submissions;
    });
  }
}

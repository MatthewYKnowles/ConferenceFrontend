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

  constructor(private _submissionService: SubmissionService) {
    this._submissionService.getAllSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
      this.submissions.sort((a, b) => {return a.StartTimeInMinutes - b.StartTimeInMinutes; });
      this.submissions.sort((a, b) => {return a.StartTimeInHours - b.StartTimeInHours; });
    });
  }

  ngOnInit() {
  }
}

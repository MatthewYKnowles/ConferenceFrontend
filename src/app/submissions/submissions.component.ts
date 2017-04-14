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
    });
  }

  ngOnInit() {
  }

  displayAsMinutes(minutes) {
    let minutesAsAString = '';
    if (minutes <= 9) {
      minutesAsAString += '0';
    }
    minutesAsAString += minutes.toString();
    return minutesAsAString;
  }
}

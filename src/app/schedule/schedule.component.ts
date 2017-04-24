import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [SubmissionService]
})
export class ScheduleComponent implements OnInit {
  private greenRoomSubmissions: any;
  private redRoomSubmissions: any;
  private submissions: any;
  private purpleRoomSubmissions: any;

  constructor(private _submissionService: SubmissionService) {
    this._submissionService.getAllSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
      this.submissions = this.submissions.filter((submission) => {return submission.Room; });
      this.submissions.sort((a, b) => {return a.StartTimeInMinutes - b.StartTimeInMinutes; });
      this.submissions.sort((a, b) => {return a.StartTimeInHours - b.StartTimeInHours; });
    });
  }
  ngOnInit() {
  }

}

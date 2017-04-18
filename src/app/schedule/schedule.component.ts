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
  greenRoomSubmissions: any;
  redRoomSubmissions: any;
  private submissions: any;
  private purpleRoomSubmissions: any;

  constructor(private _submissionService: SubmissionService) {
    this._submissionService.getAllSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
      this.redRoomSubmissions = this.submissions.filter((submission) => {return submission.Room === 'Red'; });
      this.purpleRoomSubmissions = this.submissions.filter((submission) => {return submission.Room === 'Purple'; });
      this.greenRoomSubmissions = this.submissions.filter((submission) => {return submission.Room === 'Green'; });
    });
  }
  ngOnInit() {
  }

}

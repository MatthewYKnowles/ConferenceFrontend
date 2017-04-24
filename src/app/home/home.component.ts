import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../services/submission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SubmissionService]
})
export class HomeComponent implements OnInit {
  private schedulePostedStatus: string;
  private submissionsStatus: string;

  constructor(private _submissionsService: SubmissionService) { }

  ngOnInit() {
    this.getSubmissionStatus();
    this.getSchedulePostedStatus();
  }

  getSubmissionStatus(): void {
    this._submissionsService.getSubmissionsStatus().subscribe((submissionsStatus) => {
      this.submissionsStatus = submissionsStatus.Status;
    });
  }

  getSchedulePostedStatus(): void {
    this._submissionsService.getSchedulePostedStatus().subscribe((schedulePostedStatus) => {
      this.schedulePostedStatus = schedulePostedStatus.Status;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../../services/submission.service';

@Component({
  selector: 'app-schedule-posted-status',
  templateUrl: './schedule-posted-status.component.html',
  styleUrls: ['./schedule-posted-status.component.css'],
  providers: [SubmissionService]
})

export class SchedulePostedStatusComponent implements OnInit {
  private schedulePostedStatus: string;

  constructor(private _submissionsService: SubmissionService) { }

  ngOnInit() {
    this.getSchedulePostedStatus();
  }

  getSchedulePostedStatus(): void {
    this._submissionsService.getSchedulePostedStatus().subscribe((schedulePostedStatus) => {
      this.schedulePostedStatus = schedulePostedStatus.Status;
    });
  }

  scheduleIsPosted(): boolean {
    return this.schedulePostedStatus === 'posted';
  };

  scheduleIsNotPosted(): boolean {
    return this.schedulePostedStatus === 'not posted';
  }

  postSchedule(): void {
    this._submissionsService.postSchedule().subscribe(() => {
      this.getSchedulePostedStatus();
    });
  }

  unpostSchedule(): void {
    this._submissionsService.removeSchedule().subscribe(() => {
      this.getSchedulePostedStatus();
    });
  }
}

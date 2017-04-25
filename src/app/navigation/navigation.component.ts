import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../services/submission.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [SubmissionService]
})
export class NavigationComponent implements OnInit {
  private submissionsStatus: string;
  private schedulePostedStatus: string;

  constructor(private _submissionsService: SubmissionService) {}

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

  submissionsStatusIsOpen(): boolean {
    return this.submissionsStatus === 'open';
  }

  scheduleIsPosted(): boolean {
    return this.schedulePostedStatus === 'posted';
  };
}

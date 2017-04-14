import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../../services/submission.service';

@Component({
  selector: 'app-submissions-status',
  templateUrl: './submissions-status.component.html',
  styleUrls: ['./submissions-status.component.css'],
  providers: [SubmissionService]
})
export class SubmissionsStatusComponent implements OnInit {
  private submissionsStatus: string;

  constructor(private _submissionsService: SubmissionService) {
  }

  ngOnInit() {
    this.getSubmissionStatus();
  }

  getSubmissionStatus(): void {
    this._submissionsService.getSubmissionsStatus().subscribe((submissionsStatus) => {
      this.submissionsStatus = submissionsStatus.Status;
    });
  }

  submissionsStatusIsOpen(): boolean {
    return this.submissionsStatus === 'open';
  }

  submissionsStatusIsClosed(): boolean {
    return this.submissionsStatus === 'closed';
  }

  closeSubmissions() {
    this._submissionsService.closeSubmissions().subscribe(() => {
      this.getSubmissionStatus();
    });
  }

  openSubmissions(): void {
    this._submissionsService.openSubmissions().subscribe(() => {
      this.getSubmissionStatus();
    });
  }
}

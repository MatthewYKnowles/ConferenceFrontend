import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../../services/submission.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css'],
  providers: [SubmissionService]
})
export class AdminNavigationComponent implements OnInit {
  private submissionsStatus: string;

  constructor(private _submissionsService: SubmissionService) {}

  ngOnInit() {
    this.getSubmissionStatus();
  }

  getSubmissionStatus(): void {
    this._submissionsService.getSubmissionsStatus().subscribe((submissionsStatus) => {
      this.submissionsStatus = submissionsStatus.status;
    });
  }

  submissionsStatusIsOpen(): boolean {
    return this.submissionsStatus === 'open';
  }
}

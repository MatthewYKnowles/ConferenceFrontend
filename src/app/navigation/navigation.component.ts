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

  constructor(private _submissionsService: SubmissionService) {}

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
}

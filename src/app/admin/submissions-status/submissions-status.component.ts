import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../../services/submission.service';

@Component({
  selector: 'app-submissions-status',
  templateUrl: './submissions-status.component.html',
  styleUrls: ['./submissions-status.component.css'],
  providers: [SubmissionService]
})
export class SubmissionsStatusComponent implements OnInit {
  private submissionsStatus: boolean;

  constructor(private _submissionsService: SubmissionService) {
    this._submissionsService.getSubmissionsStatus().subscribe((submissionsStatus) => {
      console.log(submissionsStatus);
      this.submissionsStatus = submissionsStatus.status;
      console.log(this.submissionsStatus);
    });
  }

  ngOnInit() {
  }

}

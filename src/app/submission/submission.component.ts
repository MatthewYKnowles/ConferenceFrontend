import {SubmissionService} from '../services/submission.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Submission} from '../models/submission';

@Component({
  selector: 'app-conference-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
  providers: [SubmissionService]
})

export class SubmissionComponent implements OnInit{
  submission: Submission;
  requiredFieldsEmpty = false;
  submissionsStatus: string;

  constructor(private _submissionsService: SubmissionService, private _router: Router) {
    this.submission = new Submission();
  }

  ngOnInit(): void {
    this.getSubmissionStatus();
  }

  submitSubmission(): void {
    this.allRequiredFieldsAreNotFilledIn()
      ? this.showRequiredFieldsErrorMessage()
      : this.postSubmissionAndNavigateHome();
  }

  private showRequiredFieldsErrorMessage() {
    this.requiredFieldsEmpty = true;
  }

  private postSubmissionAndNavigateHome() {
    this._submissionsService.postSubmission(this.submission).subscribe(() => {
        this._router.navigate(['']);
      }
    );
  }

  private allRequiredFieldsAreNotFilledIn(): boolean {
    return !this.submission.FirstName || !this.submission.LastName || !this.submission.SubmissionTitle
      || !this.submission.SubmissionAbstract || !this.submission.Email;
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
}

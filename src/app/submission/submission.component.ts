import {SubmissionService} from '../services/submission.service';
import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Submission} from "../models/submission";

@Component({
  selector: 'app-conference-submission',
  templateUrl: './submission.component.html',
  providers: [SubmissionService]
})

export class SubmissionComponent {
  submission: Submission;
  requiredFieldsEmpty = false;

  constructor(private _submissionService: SubmissionService, private _router: Router) {
    this.submission = new Submission();
  }

  SubmitSubmission(): void {
    if (this.allRequiredFieldsAreNotFilledIn()) {
      this.requiredFieldsEmpty = true;
    } else {
      this._submissionService.postSubmission(this.submission).subscribe();
      this._router.navigate(['']);
    }
  }

  private allRequiredFieldsAreNotFilledIn(): boolean {
    return !this.submission.FirstName || !this.submission.LastName || !this.submission.SubmissionTitle
      || !this.submission.SubmissionAbstract || !this.submission.Email;
  }
}

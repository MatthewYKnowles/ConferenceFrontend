import {SubmissionService} from '../services/submission.service';
import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-conference-submission',
  templateUrl: './submission.component.html',
  providers: [SubmissionService]
})

export class SubmissionComponent {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  bio: string;
  submissionTitle: string;
  submissionAbstract: string;
  requiredFieldsEmpty = false;

  constructor(private _submissionService: SubmissionService, private _router: Router) {
  }

  SubmitSubmission(): void {
    if (this.allRequiredFieldsFilledIn()) {
      this.requiredFieldsEmpty = true;
    } else {
      this._submissionService.postSubmission(this.firstName, this.lastName, this.company, this.email, this.bio,
        this.submissionTitle, this.submissionAbstract);
      this._router.navigate(['']);
    }
  }

  private allRequiredFieldsFilledIn(): boolean {
    return !this.firstName || !this.lastName || !this.submissionTitle || !this.submissionAbstract || !this.email;
  }
}

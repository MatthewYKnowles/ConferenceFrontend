import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionService} from '../../services/submission.service';
import {Submission} from '../../models/submission';

@Component({
  selector: 'app-edit-submission',
  templateUrl: './edit-submission.component.html',
  styleUrls: ['./edit-submission.component.css'],
  providers: [SubmissionService]
})
export class EditSubmissionComponent implements OnInit {
  showErrorMessage: boolean;
  submission: Submission;

  minuteOptions: any = [
    { value: 0, display: '00' },
    { value: 15, display: '15' },
    { value: 30, display: '30' },
    { value: 45, display: '45' },
  ];
  hourOptions: any = [
    { value: 8, display: '08' },
    { value: 9, display: '09' },
    { value: 10, display: '10' },
    { value: 11, display: '11' },
    { value: 12, display: '12' },
    { value: 13, display: '13' },
    { value: 14, display: '14' },
    { value: 15, display: '15' },
    { value: 16, display: '16' },
    { value: 17, display: '17' },
    { value: 18, display: '18' },
    { value: 19, display: '19' },
  ];
  roomOptions: any = [
    { name: 'Green' },
    { name: 'Red' },
    { name: 'Purple' }
  ];

  constructor(private route: ActivatedRoute, private _submissionService: SubmissionService, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._submissionService.getSubmission(params['submissionId']).subscribe((submission) => {
        this.submission = submission;
      });
    });
  }

  updateSubmission() {
    this.allRequiredFieldsFilledIn()
      ? this.putSubmissionAndNavigateToSubmissions()
      : this.diplayErrorMessage();
  }

  private diplayErrorMessage() {
    this.showErrorMessage = true;
  }

  putSubmissionAndNavigateToSubmissions() {
    this._submissionService.putSubmission(this.submission).subscribe(() => {
      this.navigateToSubmissions();
    });
  }

  unScheduleSubmission() {
    this.submission.unschedule();
    this._submissionService.putSubmission(this.submission).subscribe(() => {
      this.navigateToSubmissions();
    });
  }

  deleteSubmission() {
    this._submissionService.deleteSubmission(this.submission.Id).subscribe(() => {
      this.navigateToSubmissions();
    });
  }

  cancelSubmissions() {
    this.navigateToSubmissions();
  }

  allRequiredFieldsFilledIn(): boolean {
    return Boolean(this.submission.EndTimeInHours && this.submission.StartTimeInHours && this.submission.Room);
  }

  navigateToSubmissions() {
    this._router.navigate(['/admin/submissions']);
  }
}

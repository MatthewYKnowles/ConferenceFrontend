import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SubmissionService} from '../../services/submission.service';
import {Submission} from '../../models/submission';

@Component({
  selector: 'app-edit-submission',
  templateUrl: './edit-submission.component.html',
  styleUrls: ['./edit-submission.component.css'],
  providers: [SubmissionService]
})
export class EditSubmissionComponent implements OnInit, OnDestroy {
  startTime: Date;
  startTimeInHours: number;
  private id: string;
  private sub: Subscription;
  private submission: Submission = new Submission();

  constructor(private route: ActivatedRoute, private _submissionService: SubmissionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._submissionService.getSubmission(this.id).subscribe((submission) => {
      this.submission = submission;
      this.startTime = submission.startTime;
      this.startTimeInHours = this.startTime.getHours();
      console.log(this.startTime);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getStartTime() {
    console.log(this.submission)
    return this.submission.StartTime;
  }

}

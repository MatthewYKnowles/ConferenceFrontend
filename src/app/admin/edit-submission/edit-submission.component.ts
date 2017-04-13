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
  room: string;
  endTimeInMinutes: number;
  endTimeInHours: number;
  endTime: Date;
  startTime: Date;
  startTimeInHours: number;
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
  private id: string;
  private sub: Subscription;
  private submission: Submission = new Submission();
  private startTimeInMinutes: number;

  constructor(private route: ActivatedRoute, private _submissionService: SubmissionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._submissionService.getSubmission(this.id).subscribe((submission) => {
      this.submission = submission;
      this.startTime = new Date(submission.startTime);
      this.endTime = new Date(submission.endTime);
      this.startTimeInHours = this.startTime.getUTCHours();
      this.startTimeInMinutes = this.startTime.getUTCMinutes();
      this.endTimeInHours = this.endTime.getUTCHours();
      this.endTimeInMinutes = this.endTime.getUTCMinutes();
      this.room = submission.room;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

export class Submission {
  Id: string;
  FirstName: string;
  LastName: string;
  Company: string;
  SubmissionAbstract: string;
  Email: string;
  Bio: string;
  SubmissionTitle: string;
  StartTimeInHours: number;
  StartTimeInMinutes: number;
  EndTimeInHours: number;
  EndTimeInMinutes: number;
  Room: string;

  unschedule() {
    this.StartTimeInHours = 0;
    this.StartTimeInMinutes = 0;
    this.EndTimeInHours = 0;
    this.EndTimeInMinutes = 0;
    this.Room = null;
  }
}

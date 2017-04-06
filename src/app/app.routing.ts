import {RouterModule} from '@angular/router';
import {StandardComponent} from './standard/standard.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {SubmissionComponent} from './submission/submission.component';
import {SubmissionsComponent} from './submissions/submissions.component';
import {SubmissionsStatusComponent} from './admin/submissions-status/submissions-status.component';
import {EditSubmissionComponent} from "./admin/edit-submission/edit-submission.component";

export const routing = RouterModule.forRoot([
  { path: '',
    component: StandardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'submission',
        component: SubmissionComponent
      },
      {
        path: 'submissions',
        component: SubmissionsComponent
      }
    ] },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'submission',
        component: SubmissionComponent
      },
      {
        path: 'edit-submission/:id',
        component: EditSubmissionComponent
      },
      {
        path: 'submissions',
        component: SubmissionsComponent
      },
      {
        path: 'submissions-status',
        component: SubmissionsStatusComponent
      }
    ]
  }
]);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';
import { ReviewerhomeComponent } from './reviewerhome/reviewerhome.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'


const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'userhome', component: UserhomeComponent, canActivate: [AuthGuardService]},
{path: 'leaderboard', component: LeaderboardComponent },
{path: 'schedule', component: ScheduleComponent },
{path: 'assignment', component: AssignmentComponent },
{path: 'adminhome', component: AdminhomeComponent },
{path: 'score', component: ScoreComponent },
{path: 'signin', component: SigninComponent },
{path: 'mentorhome', component: MentorhomeComponent },
{path: 'reviewerhome', component: ReviewerhomeComponent },
{path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

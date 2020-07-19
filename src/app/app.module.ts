import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ScoreComponent } from './score/score.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { SigninComponent } from './signin/signin.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';
import { ReviewerhomeComponent } from './reviewerhome/reviewerhome.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { ProgressComponent } from './progress/progress.component';
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    LeaderboardComponent,
    ScheduleComponent,
    AssignmentComponent,
    AdminhomeComponent,
    ScoreComponent,
    SigninComponent,
    MentorhomeComponent,
    ReviewerhomeComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule,
    PdfJsViewerModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

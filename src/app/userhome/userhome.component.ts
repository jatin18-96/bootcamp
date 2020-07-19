import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders, HttpRequest, HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService, TokenPayload } from '../authentication.service'


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {

public assignments: Assignments[];
public current_schedule: Schedule[];

/* to display assignments on userhome */


getTasks()
{
var url:string = 'http://f4090684ccb9.ngrok.io/api/v1/ncg/assignments';
let headers = new HttpHeaders();
headers.append('Content-Type','application/json');
var empid: any = JSON.parse(localStorage.getItem('employeeId'));
return this.http.get(`http://f4090684ccb9.ngrok.io/api/v1/ncg/assignments?employeeId=${empid}`, {headers: headers})
    .subscribe(result => {
console.log(result);
this.assignments = result as Assignments[];

}, error => console.error(error));   
        
}




constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {

this.http.get('http://b6b67166de9f.ngrok.io/api/v1/home/schedule').subscribe(result => {
console.log(result);
this.current_schedule = result as Schedule[];
}, error => console.error(error));

this.getTasks();
 
}



/* end functionality */


/* to upload assignments' submission on server */

 ngOnInit(){
   
  }



/* end functionality */
 
  schedule():void{
    this.router.navigate(['/schedule']);
    
  }
  assignment():void{
    this.router.navigate(['/assignment']);
    
  }
  
  
  /*upload file*/
  
 
 
 logout() {
    this.auth.logout();
  }
}

/* necessary interfaces */

interface Assignments {
    assignId: number;
    creater:string;
    description: string;
    maxScore: number;
    difficulty: string;
    deadline: string;
    url: string;
    status: number;
}
 
 
interface Schedule {
    description: string;
    endDateTime: any;
    schdId: number;
    startDateTime: any;
} 
    
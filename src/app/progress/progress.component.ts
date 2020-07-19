import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

private url: 'http://f4090684ccb9.ngrok.io/api/v1/ncg/update/progress';
public comments: Comments[];

/* get all comments for a NCG */

constructor(private http: HttpClient, private router: Router) {

this.getComments(1); /* get comments */

}

getComments(empid){
let headers = new HttpHeaders();
headers.append('Content-Type','application/json');
return this.http.get(`http://f4090684ccb9.ngrok.io/api/v1/ncg/update/progress?employeeId=${empid}`, {headers: headers})
    .subscribe(result => {
console.log(result);
this.comments = result as Comments[];

}, error => console.error(error));   

}
  
  
ngOnInit() {  }
  
isModalVisible = false;

  
add(assign){
var fin_data:any = JSON.stringify(assign.value);
this.isModalVisible = false;
this.http.post(this.url, fin_data).subscribe(status=> {
              if(status == "added")
              {
                  alert("Comment added");
                  this.router.navigate(['/progress']);
              }
              else
              {
                  alert("Error occured");
              }
 });
 }
 
 /* Delete comment */
 
 deletecmnt(assignId){
let headers = new HttpHeaders();
headers.append('Content-Type','application/json');
this.http.delete(`http://65e14b8535ea.ngrok.io/api/v1/ncg/update/progress?progressId=${assignId}`, {headers: headers}).subscribe(status=> {
                  var msg = "Comment " + assignId.toString() + " has been deleted. Please refresh. "; 
                  alert(msg);
                  this.router.navigate(['/progress']);
              
 });
 }

 
}


interface Comments{
progressId:number;
comment:string;
date:any;
}

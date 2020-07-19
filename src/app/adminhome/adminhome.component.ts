import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})




export class AdminhomeComponent implements OnInit {

currentDate = new Date();




private url: 'http://f4090684ccb9.ngrok.io/api/v1/assignment/data';
public assignments: Assignments[];
public teams: Teams[];
public update_assignment: Assignments[];

constructor(private http: HttpClient, private router: Router) {
this.http.get('http://f4090684ccb9.ngrok.io/api/v1/admin/assignment/data').subscribe(result => {
this.assignments = result as Assignments[];
}, error => console.error(error));


this.http.get('https://4c1a0df7bd43.ngrok.io/api/v1/admin/groups').subscribe(result => {
this.teams = result as Teams[];
console.log(this.teams);
console.log(result);
}, error => console.error(error));


}
  
  
  ngOnInit() {  }
  
  


isModalVisible = false;
isModal1Visible = false;
isModal2Visible = false;


  
 add(assign){
 var fin_data:any = JSON.stringify(assign.value);
 console.log(fin_data);
 this.isModalVisible = false;
 this.http.post('http://f4090684ccb9.ngrok.io/api/v1/admin/assignment/data', fin_data).subscribe(status=> {
              if(status == "added")
              {
                  alert("Assigment added");
                  this.router.navigate(['/adminhome']);
              }
              else
              {
                  alert("Error occured");
                  this.router.navigate(['/adminhome']);
              }
 });
 }
 
 /* Delete assignment */
 
 deleteassign(assignId){
 
 this.http.delete('http://65e14b8535ea.ngrok.io/api/v1/admin/assignment/data/'+assignId).subscribe(status=> {
              
                  var msg = "Assigment " + assignId.toString() + " has been deleted. Please refresh. "; 
                  alert(msg);
                  this.router.navigate(['/adminhome']);
              
 });
 }
 
updateassign(assignid){

var jsonString = JSON.stringify(assignid);
console.log(typeof(jsonString));
this.http.get('http://f4090684ccb9.ngrok.io/api/v1/admin/assignment/data', assignid).subscribe(result => {

}, error => console.error(error));

 }
 
 
 
 
}

interface Assignments {
   assignId: number;
    creater:string;
    description: string;
    maxScore: number;
    difficulty: string;
    deadline: string;
    type: string;
    }
    
    interface Teams{
    teamId:number;
    members:any;
    }
   

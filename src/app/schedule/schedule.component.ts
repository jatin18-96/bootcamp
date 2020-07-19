import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public current_schedule: Schedule[];
  constructor(private http: HttpClient) {
  this.http.get('http://b6b67166de9f.ngrok.io/api/v1/admin/schedule/data').subscribe(result => {
console.log(result);
this.current_schedule = result as Schedule[];
}, error => console.error(error)); }

  ngOnInit(): void {
  }
  
}


/* necessary interfaces */


interface Schedule {
    description: string;
    endDateTime: any;
    schdId: number;
    startDateTime: any;
}
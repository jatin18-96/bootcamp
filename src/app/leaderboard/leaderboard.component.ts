import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

public positions: Positions[];

constructor(private http: HttpClient, private router: Router) {
this.http.get('https://4c1a0df7bd43.ngrok.io/api/v1/leaderboard').subscribe(result => {
this.positions = result as Positions[];
console.log(this.positions);
}, error => alert("Error occurred"));
}




  ngOnInit(): void {
  }
   
}
interface Positions {
    email:string;
    score: string;
    rank:number;
    }
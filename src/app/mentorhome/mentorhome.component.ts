import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorhome',
  templateUrl: './mentorhome.component.html',
  styleUrls: ['./mentorhome.component.css']
})
export class MentorhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  

 
}

interface Assignments {
    assignId: number;
    creater:string;
    description: string;
    maxScore: number;
    difficulty: string;
    deadline: string;
    url: string;
    }
 

import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AuthenticationService, TokenPayload } from '../authentication.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

credentials: TokenPayload = {
    email: '',
    password: ''
  }
  
  

constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }


  
  
 
  
/* old method 

login(loginform){
var data:any = JSON.stringify(loginform.value);
var pwd:string = (<string>loginform.value.password).trim();
var rndstr:string = "key123";
var encp_pwd:string = CryptoJS.AES.encrypt(pwd, rndstr).toString();
var fin_data = data.replace(pwd, encp_pwd);  
console.log(encp_pwd);
this.http.post('http://65e14b8535ea.ngrok.io/api/v1/ncg/login', fin_data).subscribe(status=> {
              if(status == "valid")
              {
                   this.router.navigate(['/userhome'])
              }
              else
              {
                   alert("Wrong info")
              }
 }, err => alert("Error occurred"),
 );
}

*/


login(loginform) {
var data:any = JSON.stringify(loginform.value);
console.log(JSON.stringify(loginform.value));
    this.auth.login(data).subscribe(
      () => {
        this.router.navigateByUrl('/userhome')
      },
      err => {
        alert(err)
      }
    )
  }
  

}

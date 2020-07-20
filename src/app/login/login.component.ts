import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


form: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
   
  }


  
  

  

 
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"

/* reset form 

OnInit()
{
this.resetForm();
}

resetForm(form? : NgForm)
{
if(form != null)
form.reset();
this.user={
employeeId: null,
name: '',
email: '',
password: '',
qualification: '',
BU: '',
proficiency: ''

}
}
  */
  
/* register user */

register(signup){
var data:any = JSON.stringify(signup.value);
var pwd:string = (<string>signup.value.password).trim();
var rndstr:string = "key123";
var encp_pwd:string = CryptoJS.AES.encrypt(pwd, rndstr).toString();
var fin_data = data.replace(pwd, encp_pwd);  

this.http.post('http://65e14b8535ea.ngrok.io/api/v1/ncg/data', fin_data).subscribe(status=> {
              if(status == "valid")
              {
                  this.router.navigate(['/signin'])
              }
              else
              {
                  alert("Already registered");
              }
 }, err => alert("Error occurred"),
 );
}
}

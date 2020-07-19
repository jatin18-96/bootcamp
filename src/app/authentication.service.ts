import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  id: number
  email: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
  employeeId: string
}

export interface TokenPayload {
  email: string
  password: string
}

@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string, id: string): void {
    localStorage.setItem('usertoken', token)
    localStorage.setItem('employeeId', id)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post('http://f4090684ccb9.ngrok.io/api/v1/user/login', user)
    console.log("reached auth.service.ts");
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token, data.employeeId)
          console.log(data.token);
          console.log(data.employeeId);
        }
        return data
      })
    )

    return request
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/signin')
  }
}
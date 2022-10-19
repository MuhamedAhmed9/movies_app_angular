import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = new BehaviorSubject(null); //we use this function in the navbar component to check if the user is logged in or not
  //behaviour subject is a special type of observable that has a value
  //behaviour subject allow us to make .subscribe() on userData

  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('user_token')) {
      this.saveUserData();
    }
  }

  saveUserData() {
    const token = localStorage.getItem('user_token');
    if (token) {
      this.userData.next(jwtDecode(token));
    }
  }

  registerUser(userObj: object): Observable<any> {
    return this._httpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      userObj
    );
  }

  signInUser(userObj: object): Observable<any> {
    return this._httpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      userObj
    );
  }

  logout() {
    localStorage.removeItem('user_token');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }
}

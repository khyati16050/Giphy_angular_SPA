import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // public users = [{
  //   username:"admin",
  //   password:"pass",
  //   list: []
  // }]

  constructor() { }
  authenticateUser(data) {
    return (data.username === 'admin' || data.username === 'manager') && data.password == 'pass';
  }

  setBearerToken(token,username) {
    localStorage.setItem('token', token);
    localStorage.setItem(`username`,username)
  }

  getBearerToken() {
    return localStorage.getItem('token');
  }

  isUserAuthenticated(token): boolean {
    return token ? true : false;
  }
}

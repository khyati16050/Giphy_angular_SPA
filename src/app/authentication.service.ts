import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public users = [{
    username:"admin",
    password:"pass",
    list: []
  }]

  constructor() { }
  authenticateUser(data) {
    return (data.username === 'admin' || data.username === 'stranger') && data.password == 'pass';
  }

  setBearerToken(token) {
    localStorage.setItem('token', token);
  }

  getBearerToken() {
    return localStorage.getItem('token');
  }

  isUserAuthenticated(token): boolean {
    return token ? true : false;
  }
}

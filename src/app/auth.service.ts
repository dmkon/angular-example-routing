import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor() { }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }

  iaAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createNewUser = (newUser, callback) => {
    this.http.post<any>('http://localhost:3333/api/users', newUser)
      .subscribe((response) => {
        callback(response)
      })
  }

  getAllUsers = (callback) => {
    return this.http.get('http://localhost:3333/api/users').subscribe((data) => {
      callback(data)
    })
  }

}

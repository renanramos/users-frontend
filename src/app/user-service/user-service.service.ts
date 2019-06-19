import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  private host = 'http://localhost'
  private port = '5000'
  private api = '/api'
  private users = '/users'

  private atualizaTabela = new Subject<boolean>();  

  constructor(private http: HttpClient) { }
  
  atualizaTabela$ = this.atualizaTabela.asObservable();

  atualizaTabelaUsuarios(val: boolean){
    this.atualizaTabela.next(val);
  }

  // funções de consumo da API REST
  createNewUser = (newUser: any, callback) => {
    this.http.post<any>(`${this.host}:${this.port}${this.api}${this.users}`, newUser)
      .subscribe((response) => {
        callback(response)
      })
  }

  getAllUsers = (callback) => {
    return this.http.get(`${this.host}:${this.port}${this.api}${this.users}`).subscribe((data) => {
      callback(data)
    })
  }

}

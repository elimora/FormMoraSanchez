import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'https://form-back-mora-sanchez.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  createUser(user){
    return this.http.post<any>(this.URL + '/create/user',user)
  }

  getUser(user){
      return this.http.get<any>(this.URL + '/user',user)
  }

  updateUser(user){
    return this.http.put<any>(this.URL + '/update/user',user)
  }

  deleteUser(user){
    return this.http.delete<any>(this.URL + '/delete/user',user)
  }

}
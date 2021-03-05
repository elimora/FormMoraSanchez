import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private URL = 'https://form-back-mora-sanchez.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  storeAnswer(response){
    return this.http.post<any>(this.URL + '/create/response',response)
  }

  getAnswer(data){
      return this.http.get<any>(this.URL + '/response',data)
  }

  updateResponse(data){
    return this.http.put<any>(this.URL + '/update/response',data)
  }

  createRoles(){
    return this.http.post<any>(this.URL + '/innit/rol',"")
  }

}
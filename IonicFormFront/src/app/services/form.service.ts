import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private URL = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  createForm(form){
    return this.http.post<any>(this.URL + '/create/form',form)
  }

  getFormByName(form){
      return this.http.get<any>(this.URL + '/form',form)
  }

  getAllForms(){
    return this.http.get<any>(this.URL + '/list/form')
  }

  changeFormName(form){
    return this.http.put<any>(this.URL + '/update/form',form)
  }

  changeFormSub(form){
    return this.http.put<any>(this.URL + '/form/asign',form)
  }

  deleteForm(form){
    return this.http.delete<any>(this.URL + '/delete/form',form)
  }

}
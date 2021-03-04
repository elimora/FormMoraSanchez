import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private URL = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  createMenu(menu){
    return this.http.post<any>(this.URL + '/create/menu',menu)
  }

  createSub(sub){
    return this.http.post<any>(this.URL + '/create/sub',sub)
  }

  getMenus(){
      return this.http.get<any>(this.URL + '/menu')
  }

  getAllSubs(){
    return this.http.get<any>(this.URL + '/list/sub')
  }

  getSubsByMenu(menu){
    return this.http.get<any>(this.URL + '/sub/menu',menu)
  }

  changeNameMenu(menu){
    return this.http.put<any>(this.URL + '/update/menu',menu)
  }

  updateSub(sub){
    return this.http.put<any>(this.URL + '/update/sub',sub)
  }

  deleteMenu(menu){
    return this.http.delete<any>(this.URL + '/delete/menu',menu)
  }
  
  deleteSub(sub){
    return this.http.delete<any>(this.URL + '/delete/sub',sub)
  }

}
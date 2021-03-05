import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private URL = 'https://form-back-mora-sanchez.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  createItem(item){
    return this.http.post<any>(this.URL + '/create/item',item)
  }

  getItemByForm(form){
      return this.http.get<any>(this.URL + '/item/form',form)
  }

  getItemByStyle(style){
    return this.http.get<any>(this.URL + '/item/style',style)
}

  getAllItems(){
    return this.http.get<any>(this.URL + '/list/item')
  }

  updateItem(item){
    return this.http.put<any>(this.URL + '/update/item',item)
  }

  updateStyle(style){
    return this.http.put<any>(this.URL + '/update/style',style)
  }

  deleteItem(item){
    return this.http.delete<any>(this.URL + '/delete/item',item)
  }

}
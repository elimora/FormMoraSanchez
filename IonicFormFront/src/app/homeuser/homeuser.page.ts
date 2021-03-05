import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.page.html',
  styleUrls: ['./homeuser.page.scss'],
})
export class HomeuserPage implements OnInit {

  arrayMenus: any;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(){
    this.menuService.getMenus().subscribe(data => {
      this.arrayMenus = data;
    })
  }
}

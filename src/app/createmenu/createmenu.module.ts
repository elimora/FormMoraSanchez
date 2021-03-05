import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatemenuPageRoutingModule } from './createmenu-routing.module';

import { CreatemenuPage } from './createmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatemenuPageRoutingModule
  ],
  declarations: [CreatemenuPage]
})
export class CreatemenuPageModule {}

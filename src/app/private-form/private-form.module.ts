import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateFormPageRoutingModule } from './private-form-routing.module';

import { PrivateFormPage } from './private-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateFormPageRoutingModule
  ],
  declarations: [PrivateFormPage]
})
export class PrivateFormPageModule {}

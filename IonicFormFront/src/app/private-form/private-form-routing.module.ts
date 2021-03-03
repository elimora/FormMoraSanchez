import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateFormPage } from './private-form.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateFormPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatemenuPage } from './createmenu.page';

const routes: Routes = [
  {
    path: '',
    component: CreatemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatemenuPageRoutingModule {}

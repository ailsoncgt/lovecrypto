import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertCoinBaseAccountPage } from './insert-coin-base-account.page';

const routes: Routes = [
  {
    path: '',
    component: InsertCoinBaseAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertCoinBaseAccountPage]
})
export class InsertCoinBaseAccountPageModule {}

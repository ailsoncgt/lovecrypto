import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThermsOfServicePage } from './therms-of-service.page';

const routes: Routes = [
  {
    path: '',
    component: ThermsOfServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThermsOfServicePage]
})
export class ThermsOfServicePageModule {}

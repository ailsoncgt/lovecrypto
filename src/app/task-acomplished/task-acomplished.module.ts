import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaskAcomplishedPage } from './task-acomplished.page';

const routes: Routes = [
  {
    path: '',
    component: TaskAcomplishedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskAcomplishedPage]
})
export class TaskAcomplishedPageModule {}

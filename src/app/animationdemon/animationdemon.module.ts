import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationdemonComponent } from './animationdemon.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'ac', component: AnimationdemonComponent }
];


@NgModule({
  declarations: [AnimationdemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimationdemonModule { }

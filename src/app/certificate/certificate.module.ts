import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cc', component: CertificateComponent }
];


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CertificateModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './pages/login/login.module#LoginModule'},
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'certificate', loadChildren: './certificate/certificate.module#CertificateModule' },
  { path: 'animationdemon', loadChildren: './animationdemon/animationdemon.module#AnimationdemonModule' },
  { path: '**', redirectTo: 'error/ec' }
];


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

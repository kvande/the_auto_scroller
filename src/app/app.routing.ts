import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'one', loadChildren: () => import('./version-one-module/version-one.module').then(i => i.VersionOneModule) },
  { path: 'two', loadChildren: () => import('./version-two-module/version-two.module').then(i => i.VersionTwoModule) },
  { path: 'three', loadChildren: () => import('./version-three-module/version-three.module').then(i => i.VersionThreeModule) },
  { path: 'four', loadChildren: () => import('./version-four-module/version-four.module').then(i => i.VersionFourModule) },
  { path: 'five', loadChildren: () => import('./version-five-module/version-five.module').then(i => i.VersionFiveModule) },
  { path: 'six', loadChildren: () => import('./version-six-module/version-six.module').then(i => i.VersionSixModule) },
  { path: 'seven', loadChildren: () => import('./version-seven-module/version-seven.module').then(i => i.VersionSevenModule) },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LandingComponent
  ],
})
export class AppRoutingModule { }
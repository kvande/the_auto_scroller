import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RouteService } from './services/route.service';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'one', loadChildren: './version-one-module/version-one.module#VersionOneModule' },
  { path: 'two', loadChildren: './version-two-module/version-two.module#VersionTwoModule'},
  { path: 'three', loadChildren: './version-three-module/version-three.module#VersionThreeModule'},
  { path: 'four', loadChildren: './version-four-module/version-four.module#VersionFourModule'},
  { path: 'five', loadChildren: './version-five-module/version-five.module#VersionFiveModule'},
  { path: 'six', loadChildren: './version-six-module/version-six.module#VersionSixModule' },
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

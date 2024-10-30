import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainFeaturesModule} from './features/main-features/main-features.module';
import {SideFeaturesModule} from './features/side-feature/side-features.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/main-features/main-features.module').then(m => m.MainFeaturesModule),
  },
  {
    path: "side",
    loadChildren: () => import('./features/side-feature/side-features.module').then(m => m.SideFeaturesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

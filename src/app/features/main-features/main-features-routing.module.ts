import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DynamicComponentComponent} from './components/dynamic-component/dynamic-component.component';
import {UtilizziamoIlRouterComponent} from './components/utilizziamo-il-router/utilizziamo-il-router.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
  {
    path: 'homepage',
    component: HomeComponent,
    canActivate:[],
    data: {
      role: 'homepage',
    }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'programmata',
    redirectTo: 'about',
    //component: UtilizziamoIlRouterComponent
  },
  /*{
    path: ':parola',
    component: DynamicComponentComponent
  },*/
  {
    path: 'standalone',
    loadComponent: () => import('./components/component-standalone/component-standalone.component').then((c) => c.ComponentStandaloneComponent),
  },
  {
    path: '**',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainFeaturesRoutingModule { }

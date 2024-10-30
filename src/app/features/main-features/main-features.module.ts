import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MainFeaturesRoutingModule} from './main-features-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { ComponentStandaloneComponent } from './components/component-standalone/component-standalone.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { UtilizziamoIlRouterComponent } from './components/utilizziamo-il-router/utilizziamo-il-router.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    DynamicComponentComponent,
    UtilizziamoIlRouterComponent,
  ],
  imports: [
    CommonModule,
    MainFeaturesRoutingModule,
    MatButtonModule
  ]
})
export class MainFeaturesModule { }

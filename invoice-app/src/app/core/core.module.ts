import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';
import { FooterComponent } from './footer/footer.component';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    NavdrawerComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ]
})
export class CoreModule { }

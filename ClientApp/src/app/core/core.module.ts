import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ControlPanelComponent } from './layout/control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavBarComponent,
    ControlPanelComponent    
  ],
  imports: [     
    CommonModule,   
    FormsModule,   
    SharedModule,
    ComponentsModule
  ],
  exports:[
    NavBarComponent,
    ControlPanelComponent    
  ]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    ButtonModule,
    PanelMenuModule,
    MenubarModule    
  ],
  exports:[
    ButtonModule,
    PanelMenuModule,
    MenubarModule 
  ]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SubMenuComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [SubMenuComponent]
})
export class ShareComponentsModule { }

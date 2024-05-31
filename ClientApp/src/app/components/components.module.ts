import { NgModule } from '@angular/core';
import { MeasureSignalComponent } from './measure-signal/measure-signal.component';
import { RepairToolingComponent } from './repair-tooling/repair-tooling.component';
import { SharedModule } from '../shared/shared.module'
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    MeasureSignalComponent,
    RepairToolingComponent,
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    MeasureSignalComponent,
    RepairToolingComponent,
    FavoritesComponent
  ]
})
export class ComponentsModule { }

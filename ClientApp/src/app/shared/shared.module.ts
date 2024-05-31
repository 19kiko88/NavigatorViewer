import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ShareComponentsModule } from './components/share-components.module';
import { provideAnimations } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ShareComponentsModule,   
    PrimeNgModule,
    NgBootstrapModule
  ],
  exports:[
    ShareComponentsModule,
    PrimeNgModule,
    NgBootstrapModule
  ]
})
export class SharedModule { }

import { Routes } from '@angular/router';
import { RepairToolingComponent } from './components/repair-tooling/repair-tooling.component';
import { MeasureSignalComponent } from './components/measure-signal/measure-signal.component';

//export const routes: Routes = [];
export const routes: Routes = [
    { path: '', component: MeasureSignalComponent },
    { path: 'measure_signal', component: MeasureSignalComponent/*, outlet: 'customOutlet'*/ },
    { path: 'repair_tooling', component: RepairToolingComponent/*, outlet: 'customOutlet'*/ }
  ];
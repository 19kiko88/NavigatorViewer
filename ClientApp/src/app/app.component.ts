import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { DisplayType, NavBarService } from './core/services/nav-bar.service';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from 'primeng/api';
import { ControlPanelComponent } from './core/layout/control-panel/control-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    CommonModule,
    CoreModule, 
    SharedModule, 
    ComponentsModule, 
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit 
{
  title = 'ClientappPnpViewer';
  func: string = '';
  @ViewChild(ControlPanelComponent) controlPanel!: ControlPanelComponent;

  constructor(private _navBarService: NavBarService)
  {}

  ngAfterViewInit(): void 
  {
    this._navBarService.$navFunction.subscribe(res => {    
      this.controlPanel.isCollapsed = res.displayType == DisplayType.ControlPanel ? false : true;
      if(res.displayType == DisplayType.Modal)
      {
        window.alert('this is a modal function.')
      }

    })
  }
}

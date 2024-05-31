import { Component } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent { 
  opacityValue: number = 10;
  opacityValue_: number = 1;
	isCollapsed = true;//控制面板預設關閉

  onChangeOpacity()
  {
    this.opacityValue_ = this.opacityValue / 10;
  }
}

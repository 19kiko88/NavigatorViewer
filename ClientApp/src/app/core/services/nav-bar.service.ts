import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService 
{
  private emitCurrentFunctionInfo = new Subject<IMenuItem>();  
  $navFunction = this.emitCurrentFunctionInfo.asObservable();
  private _sidebBarStatus: boolean = false;

  menus: IMenuItem[] = [
    // {
    //   title: 'general',
    //   type: MenuType.header
    // },
    {
      id: '001',
      level: 1,
      title: 'Measure Signal',
      icon: 'fa fa-microchip',//'bx bx-grid-alt',
      active: false,
      type: MenuType.simple,
      toggleFuncName: 'measure_signal',
      routerLink: '',
      displayType: DisplayType.ControlPanel  
    },
    {
      id: '002',
      level: 1,
      title: 'Repair Tooling',
      icon: 'fa fa-wrench',//'bx bx-grid-alt',
      active: false,
      type: MenuType.simple,
      toggleFuncName: 'Repair Tooling',
      routerLink: 'repair_tooling',
      displayType: DisplayType.ControlPanel
    },
    {
      id: '003',
      level: 1,
      title: 'VG',
      icon: 'fa fa-object-group',
      active: false,
      type: MenuType.dropdown,
      submenus: [
        {
          id: '003001',
          level: 2,
          title: 'VG 1',
          icon: 'fa fa-fighter-jet',
          active:false
        },
        {
          id: '003002',
          level: 2,
          title: 'VG 2',
          icon: 'fa fa-fighter-jet',
          active: false,
          submenus: [
            {id: '003002001', level: 3, title: 'testtest', icon: 'fa fa-rocket', active:false,
              submenus: [
              {id: '003002001001', level: 4, title: 'ifyouregoingtosanfrancisco', icon: 'fa fa-rocket', active: false}
            ]},
            {id: '003001002', level: 3, title: 'testtesttest', icon: 'fa fa-rocket', active: false}      
          ]
          // badge: {
          //   text: 'Pro ',
          //   class: 'badge-success'
          // }
        },
        {
          id: '003003',
          level: 2,
          title: 'VG 3',
          icon: 'fa fa-fighter-jet',
          active: false
        }
      ]
    },
    {
      id: '004',
      level: 1,
      title: 'Layer',
      icon: 'fa fa-tags',
      active: false,
      type: MenuType.dropdown,
      submenus: [
        {
          id: '004001',
          level: 2,
          title: 'Top',
          icon: 'fa fa-angle-double-right',
          active: false
        },
        {
          id: '004002',
          level: 2,
          title: 'Bottom',
          icon: 'fa fa-angle-double-right',
          active: false
        }
      ]
    },
    {
      id: '005',
      level: 1,
      title: 'Search',
      icon: 'fa fa-search-plus',
      active: false,
      type: MenuType.simple,
      displayType: DisplayType.Modal
    },
    {
      id: '006',
      level: 1,
      title: 'Parts Ranking',
      icon: 'fa fa-sort',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '007',
      level: 1,
      title: 'Schematics',
      icon: 'fa fa-bookmark',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '008',
      level: 1,
      title: 'Config',
      icon: 'fa fa-cog',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '009',
      level: 1,
      title: 'Measure Signal',
      icon: 'fa fa-microchip',//'bx bx-grid-alt',
      active: false,
      type: MenuType.simple,
      toggleFuncName: 'Measure Signal'
    },
    {
      id: '010',
      level: 1,
      title: 'Repair Tooling',
      icon: 'fa fa-wrench',//'bx bx-grid-alt',
      active: false,
      type: MenuType.simple,
      toggleFuncName: 'Repair Tooling'
    },
    {
      id: '011',
      level: 1,
      title: 'VG',
      icon: 'fa fa-object-group',
      active: false,
      type: MenuType.dropdown,
      submenus: [
        {
          id: '011001',
          level: 2,
          title: 'VG 1',
          icon: 'fa fa-circle-o',
          active: false,
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          id: '011002',
          level: 2,
          title: 'VG 2',
          icon: 'fa fa-circle-o',
          active: false,
        },
        {
          id: '011003',
          level: 2,
          title: 'VG 3',
          icon: 'fa fa-circle-o',
          active: false,
        }
      ]
    },
    {
      id: '012',
      level: 1,
      title: 'Layer',
      icon: 'fa fa-tags',
      active: false,
      type: MenuType.dropdown,
      submenus: [
        {
          id: '012001',
          level: 2,
          title: 'Top',
          active: false,
        },
        {
          id: '012002',
          level: 2,
          title: 'Bottom',
          active: false,
        }
      ]
    },
    {
      id: '013',
      level: 1,
      title: 'Search',
      icon: 'fa fa-search-plus',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '014',
      level: 1,
      title: 'Parts Ranking',
      icon: 'fa fa-sort',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '015',
      level: 1,
      title: 'Schematics',
      icon: 'fa fa-bookmark',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '016',
      level: 1,
      title: 'Config',
      icon: 'fa fa-cog',
      active: false,
      type: MenuType.simple,
    },
    {
      id: '016',
      level: 1,
      title: 'E-commerce',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: MenuType.dropdown,
      submenus: [
        {
          id: '016001',
          level: 2,
          title: 'Products',
          active: false,
        },
        {
          id: '016002',
          level: 2,
          title: 'Orders',
          active: false,
        },
        {
          id: '016003',
          level: 2,
          title: 'Credit cart',
          active: false,
        }
      ]
    },    
  ];

  get sideBarStatus(): boolean
  {
    return this._sidebBarStatus;
  }

  set sideBarStatus(val: boolean)
  {
    this._sidebBarStatus = val;
  }

  sendCurrentFunctionInfo(data: IMenuItem)
  {
    this.emitCurrentFunctionInfo.next(data);    
  }

  getMenuList()
  {
    return this.menus;
  }

  /**
   * Menu Icon點擊事件
   * @param currentMenu 
   * @param sendFunctionInfo 
   */
  toggleMenu(currentMenu: IMenuItem, sendFunctionInfo: boolean = true)
  {
    const sideBarStatus = this.sideBarStatus;

    if ((currentMenu.submenus?.length ?? 0) > 0) 
    {
      if (sideBarStatus)
      {
        currentMenu.active = !currentMenu.active;
      }
      else
      {
        currentMenu.active = false;
      }
    }
    else 
    {
      if (sendFunctionInfo)
      {
        this.sendCurrentFunctionInfo(currentMenu); 
      }       
    }
  }

  /**
   * Menu箭頭方向切換
   */
  getState(currentMenu: IMenuItem) 
  {
    if (currentMenu.active) 
    {
      return 'down';
    } 
    else 
    {
      return 'up';
    }
  }   
  
  
  digChild(menus?: IMenuItem[])
  {
      menus?.forEach(c => {     
          this.toggleMenu(c, false);
          this.getState(c);    

          const child = c.submenus?.filter(c => c.active == true);

          if((child?.length ?? 0) <= 0)
          {
              return;
          } 
          else 
          {
              this.digChild(child);
          }
      }) 
  }    
}

export interface IMenuItem
{
  id: string,
  level: number,
  title: string,
  type?: MenuType,
  icon?: string,
  active: boolean,
  submenus?: IMenuItem[],
  badge?: BadgeItem,
  toggleFuncName?: string,
  routerLink?: string,  
  displayType?: DisplayType
}

export enum MenuType
{
  header = 'header',//標題
  dropdown = 'dropdown',//有子選項
  simple = 'simple'//沒有子選項
}

export enum DisplayType
{
  /**
   * 控制面板顯示
   */
  ControlPanel = 'ControlPanel',

  /**
   * Modal顯示
   */
  Modal = 'Modal'
}

export interface BadgeItem
{
  text:  string,
  class: string
}

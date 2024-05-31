import { Component, Input } from '@angular/core';
import { FavoriteService } from '../../../core/services/favorite.service';
import { IMenuItem, NavBarService } from '../../../core/services/nav-bar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
  animations:[
    trigger('slide', [
        state('up', style({ height: 0 })),
        state('down', style({ height: '*' })),
        transition('up <=> down', animate(200))
      ])
  ]
})
export class SubMenuComponent {

  @Input() inputMenu: IMenuItem[] = [];
  isMenuOpen: boolean = false;

  constructor(
    private _favoriteService: FavoriteService,
    private _navBarService: NavBarService
  ){}

  getState(currentMenu: IMenuItem): string
  {
    return this._navBarService.getState(currentMenu);
  } 

  //控制MenuIcon開闔
  toggleMenu(currentMenu: IMenuItem): void
  {
    this._navBarService.toggleMenu(currentMenu)
  }  
  
  toggleFavorite(item: IMenuItem): void
  {
      if (this.isInFavoriteList(item)) 
      {
          this._favoriteService.removeFavorite(item);            
      }
      else 
      {
          this._favoriteService.addFavorite(item);            
      }
  }

  //檢查是否已經存在最愛清單
  isInFavoriteList(item: IMenuItem): boolean 
  {
    const res = this._favoriteService.isInFavoriteList(item);
    return res;
  }  
}

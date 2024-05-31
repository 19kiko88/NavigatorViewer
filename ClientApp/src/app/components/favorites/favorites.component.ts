import { SweetAlertService } from '../../core/services/sweet-alert.service';
import { FavoriteService } from './../../core/services/favorite.service';
import { IMenuItem, NavBarService } from './../../core/services/nav-bar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favoritesList: IMenuItem[] = [];

  constructor(
    private _favoritesService: FavoriteService,
    private _navBarService: NavBarService,
    private _sweetAlertService: SweetAlertService
  )
  {
    this.favoritesList = this._favoritesService.favoriteList ?? [];
  }

  toggleMenu(currentMenu: IMenuItem)
  {
    this._navBarService.toggleMenu(currentMenu)
  }

  toggleFavorite(currentMenu: IMenuItem)
  {
    console.log('toggleFavorite');
    this._sweetAlertService.showSwalConfirm(
      '', 
      '確認是否從清單中刪除此項目?', 
      "warning", 
      () => { 
        this._favoritesService.removeFavorite(currentMenu); 
        document.querySelector('#favorites')?.setAttribute('style', 'display: block;');        
      }
    );    
  }

  toggleClick()
  {
    const div = document.querySelector('#favorites');
    div?.classList.remove('active');

    const listContent = document.querySelector('#favorite_list');
    listContent?.setAttribute('style', 'display: none;');    
  }
}

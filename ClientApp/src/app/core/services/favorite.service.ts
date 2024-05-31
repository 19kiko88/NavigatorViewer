import { Injectable } from '@angular/core';
import { IMenuItem } from './nav-bar.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoriteList?: IMenuItem[] = [];
  keyFavoriteItems = 'FavoriteItems';

  constructor(
    private lsService: LocalStorageService
  ) 
  { 
    const favoriteItems = this.lsService.getItem(this.keyFavoriteItems);
    if(favoriteItems)
    {
      this.favoriteList = JSON.parse(favoriteItems);
    }
  }

  /**
   * check is in favorites list
   * @param item 
   * @returns 
   */
  isInFavoriteList(item: IMenuItem):boolean {
    return this.favoriteList?.some(c => c.id === item.id) ?? false;
  }

  /**
   * add to favorites list
   * @param item 
   */
  addFavorite(item: IMenuItem): void {
    this.favoriteList?.push(item);
    this.lsService.setItem(this.keyFavoriteItems, JSON.stringify(this.favoriteList));
  }

  /**
   * remove from favorites list
   * @param item 
   */
  removeFavorite(item: IMenuItem): void {
    const idx = this.favoriteList?.findIndex(c => c.id === item.id) ?? -1;

    if (idx !== -1) {
      this.favoriteList?.splice(idx, 1);
    }
    this.lsService.setItem(this.keyFavoriteItems, JSON.stringify(this.favoriteList))
  }
}

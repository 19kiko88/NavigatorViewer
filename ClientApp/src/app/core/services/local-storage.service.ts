import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

    // 設置項目
    setItem(key: string, value: string): void {
      if(isPlatformBrowser(this.platformId))
      {
        localStorage.setItem(key, value);
      }      
    }
  
    // 獲取項目
    getItem(key: string): string | null {
      let res: string = '';
      if(isPlatformBrowser(this.platformId))
      {
        res = localStorage.getItem(key) ?? '';
      }      
      return res;
    }
  
    // 移除項目
    removeItem(key: string): void {
      if (isPlatformBrowser(this.platformId)){
        localStorage.removeItem(key);
      }      
    }
  
    // 清空所有項目
    clear(): void {
      if (isPlatformBrowser(this.platformId)){
        localStorage.clear();
      }              
    }
}

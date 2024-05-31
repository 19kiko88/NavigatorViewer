import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { NavBarService, IMenuItem } from '../../services/nav-bar.service';

@Component({ 
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None, //css改全域
  animations:[
    trigger('slide', [
        state('up', style({ height: 0 })),
        state('down', style({ height: '*' })),
        transition('up <=> down', animate(200))
      ])
  ]
})

export class NavBarComponent implements OnInit
{
    menus: IMenuItem[] = [];
    menuOpen: boolean = false;

    constructor(
        private _navBarService: NavBarService,
        private _favoriteService: FavoriteService
    ){}

    ngOnInit() 
    {
        this.menus = this._navBarService.getMenuList();   
    }

    ngAfterViewInit():void
    {
      /**
       * 手動設定.tooltip定位(position：absolute)，避免被overflow遮住。
       * Ref：
       * https://stackoverflow.com/questions/73864703/dropdown-hover-hidden-in-overflow-y
       * https://ithelp.ithome.com.tw/articles/10212202 (differnce of absolute. relative)
       * https://www.shubo.io/get-bounding-client-rect/ (深入了解 getBoundingClientRect() 函數，輕鬆獲得元素的大小和位置)
       */
      const liElements = document.querySelectorAll('li');
      liElements.forEach(c => {
        c.addEventListener("mouseenter", () => {
            const isTopMenu = c.classList.contains('top-menu');
            const elementRect = c.getBoundingClientRect();
            let absoluteX = elementRect.right;
            let absoluteY = elementRect.top;

            //tooltip重新定位
            if(isTopMenu)
            {
                const tip : HTMLElement|null = c.querySelector('.tooltip');
                if(tip)
                {
                    tip?.setAttribute('style', `top:${absoluteY}px; left:${absoluteX}px;`);
                }
                
            }

            //sidebar close，submenu重新定位
            const idx: number = +(c.getAttribute('item_idx') ?? '0');// string to number
            const subMenu = c.querySelector(':scope > div.sidebar-submenu-close');            
            if(subMenu)
            {
                absoluteX = isTopMenu ? absoluteX : c.clientWidth ?? 0;
                absoluteY = isTopMenu ? absoluteY + 15 : idx * c.clientHeight//定位參考上一層div，top為0(平行顯示);
                console.log(`x:${ absoluteX}, y:${absoluteY}, parent li width:${c.clientWidth}`);
                subMenu?.setAttribute('style', `top:${absoluteY}px; left:${absoluteX}px;`);    
            }    
        })
      })

      const favoriteElements = document.querySelector('#favorites a');
      favoriteElements?.addEventListener("click", () => {

        const elementRect = favoriteElements.getBoundingClientRect();
        let absoluteX = elementRect.right;
        let absoluteY = elementRect.top;

        const favorites = document.querySelector('#favorites');
        if (favorites)
        {
            favorites.classList.add('active');

            const favoriteList = favorites.querySelector('#favorite_list');
            if (favoriteList)
            {
                favoriteList?.setAttribute('style', `display: block; top:${absoluteY + 23}px; left:${absoluteX}px;`);            
            }  
        }      
      })

    }

    /**
     * 側邊欄收闔後，子選單自動收合
     */
    toggleSidebar()
    {   
        this.menuOpen = !this.menuOpen;
        this._navBarService.sideBarStatus = this.menuOpen;

        if(!this.menuOpen)
        {
            this._navBarService.digChild(this.menus);
        }
    }  

    /**
     * 我的最愛toggle
     * @param item 
     */
    toggleFavorite(item: IMenuItem) 
    {
        console.log(item);

        if (this.isInFavoriteList(item)) 
        {
            this._favoriteService.removeFavorite(item);            
            //window.alert('remove from Favorite!'); 
        }
        else {
            this._favoriteService.addFavorite(item);            
            //window.alert('add to Favorite!'); 
        }
    }

    /**
     * 是否已存在我的最愛清單
     * @param item
     * @returns 
     */
    isInFavoriteList(item: IMenuItem): boolean 
    {
        return this._favoriteService.isInFavoriteList(item);
    }

    test() 
    {
        window.alert('qq');
    }
}

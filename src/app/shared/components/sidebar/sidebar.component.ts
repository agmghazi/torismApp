import {
  Component, OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Menu, NavService} from '../../services/nav.service';
import {LayoutService} from '../../services/layout.service';
import {User} from 'src/app/models/identityModels/user';
import {Constants} from 'src/app/Helper/constants';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  public iconSidebar;
  public menuItems: Menu[];
  public url: any;
  public fileurl: any;
  orderInActive: number = 0;
  orderOutActive: number = 0;
  intersection;
  checkRoles;
  user;

  constructor(
    private router: Router,
    public navServices: NavService,
    public layout: LayoutService,
  ) {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter((items) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }

  ngOnInit() {
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }

}

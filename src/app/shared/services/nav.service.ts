import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Constants} from 'src/app/Helper/constants';
import {User} from 'src/app/models/identityModels/user';
import {Router} from '@angular/router';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  roles?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public screenWidth: any;
  public collapseSidebar: boolean = false;
  public fullScreen: boolean = false;
  MENUITEMS: Menu[]
  user: User;
  // userRoles = ["OrderDirector", "OrdersOffice", "OrderCheck"]
  items;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
    if (this.user && this.user.roles && this.router.url.startsWith('/admin')) {
      this.MENUITEMS = [
        {
          "title": "تصنيفات الاعلانات",
          "icon": "search",
          "type": "link",
          "badgeType": "pill gradient-primary-1",
          "badgeValue": "4",
          "active": false,
          "path": "/admin/panel/panel-data/land-type",
          "roles": this.user.roles.some(r => ["admin"].includes(r)),
        },
        {
          "title": "مشكلات القطع",
          "icon": "flag",
          "type": "link",
          "badgeType": "pill gradient-primary-1",
          "badgeValue": "4",
          "active": false,
          "path": "/admin/panel/panel-data/land-errors",
          "roles": this.user.roles.some(r => ["admin"].includes(r)),
        },
        {
          "title": "تحكم الموقع",
          "icon": "archive",
          "type": "sub",
          "badgeType": "pill gradient-primary-1",
          "badgeValue": "1",
          "active": false,
          "roles": this.user.roles.some(r => ["admin"].includes(r)),
          "children": [
            {
              "title": "بيانات المستخدمين",
              "icon": "codepen",
              "type": "sub",
              "badgeType": "pill gradient-primary-1",
              "badgeValue": "1",
              "active": false,
              "roles": this.user.roles.some(r => ["admin"].includes(r)),
              "children": [
                {
                  "path": "/admin/panel/identity/create-user",
                  "title": "انشاء مستخدم",
                  "type": "link",
                  "roles": this.user.roles.some(r => ["admin"].includes(r))
                },
                {
                  "path": "/admin/panel/identity/all-users",
                  "title": "مستخدم سابقة",
                  "type": "link",
                  "roles": this.user.roles.some(r => ["admin"].includes(r)),
                }
              ]
            },
            {
              "title": "الطلبات",
              "icon": "paperclip",
              "type": "sub",
              "badgeType": "pill gradient-primary-1",
              "badgeValue": "1",
              "active": false,
              "roles": false,
              "children": [
                {
                  "path": "/home/global-Components/transaction/newTransaction",
                  "title": "انشاء طلب",
                  "type": "link",
                  "roles": this.user.roles.some(r => [""].includes(r))
                },
                {
                  "path": "/home/global-Components/transaction/incoming-transaction",
                  "title": "الطلبات الواردة",
                  "type": "link",
                  "roles": true
                },
                {
                  "path": "/home/global-Components/transaction/outgoing-transaction",
                  "title": "الطلبات الصادرة",
                  "type": "link",
                  "roles": true
                }
              ]
            }
          ]
        },
        {
          "title": "الذهاب للموقع العام",
          "icon": "book-open",
          "type": "link",
          "badgeType": "pill gradient-primary-1",
          "badgeValue": "4",
          "active": false,
          "path": "/client/home/landMap",
          "roles": this.user.roles.some(r => ["admin"].includes(r)),
        },
        {
          "title": " جديد",
          "icon": "file-text",
          "type": "sub",
          "badgeType": "pill gradient-primary-1",
          "badgeValue": "4",
          "active": false,
          "roles": false,
          "children": [
            {
              "path": "order/new",
              "title": "انشاء مخطط",
              "type": "link",
              "roles": this.user.roles.some(r => [""].includes(r))
            },
            {
              "path": "order/incoming",
              "title": "الطلبات الواردة",
              "type": "link",
              "roles": true
            },
            {
              "path": "order/outgoing",
              "title": "الطلبات الصادرة",
              "type": "link",
              "roles": true
            }
          ]
        }
      ]
      this.items = new BehaviorSubject<Menu[]>(null);
      this.items.next(this.MENUITEMS);
    } else if (this.router.url.startsWith('/client')) {
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    if (window.innerWidth < 991) {
      this.collapseSidebar = true;
    }
  }
}

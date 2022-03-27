import {User} from 'src/app/models/identityModels/user';
import {DOCUMENT} from '@angular/common';
import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from 'src/app/Helper/constants';
import {NavService, Menu} from '../../../services/nav.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './AdminHeaderComponent.html',
  styleUrls: ['./AdminHeaderComponent.scss'],
})
export class AdminHeaderComponent implements OnInit {
  public categories: string[] = ['Admin', 'Shopify', 'Ecommerce', 'Prestashop'];
  public paymentOptions: string[] = ['Paypal', 'Credit Card', 'Visa', 'Paytm'];

  public open: boolean = false;
  public open_search: boolean = false;
  public open_mobile_nav: boolean = false;
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;

  public url: any;
  public text: string;
  public elem;

  public menuItems: Menu[];
  public items: Menu[];

  userName: string = '';

  constructor(
    public navServices: NavService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnDestroy() {}

  ToggleSearch() {
    this.open = !this.open;
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  openMobileNav() {
    this.open_mobile_nav = !this.open_mobile_nav;
  }

  mobileSearchToggle() {
    this.open_search = !this.open_search;
  }

  onLogout() {
    localStorage.removeItem(Constants.USER_KEY);
    localStorage.clear();
    this.router.navigate(['/auth/login']);
    window.location.reload();
  }

  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });

    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (userInfo) {
      this.userName = userInfo.userName;
    }
  }
}

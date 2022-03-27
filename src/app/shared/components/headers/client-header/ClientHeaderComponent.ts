import {User} from 'src/app/models/identityModels/user';
import {DOCUMENT} from '@angular/common';
import {Component, EventEmitter, Inject, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from 'src/app/Helper/constants';
import {NavService, Menu} from '../../../services/nav.service';
import {HeaderDataService} from "../../../../services/header-data.service";
import {IdentitySecurityService} from "../../../../services/identity-security.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-client-header',
  templateUrl: './ClientHeaderComponent.html',
  styleUrls: ['./ClientHeaderComponent.scss'],
})
export class ClientHeaderComponent implements OnInit, OnChanges {
  public open: boolean = false;
  public open_search: boolean = false;
  public open_mobile_nav: boolean = false;
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public isMenuCollapsed = true;
  isAdminLogin = false
  public url: any;
  public text: string;
  public elem;
  headerStyle = false
  userName: string = '';

  constructor(
    public navServices: NavService,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private headerDataService: HeaderDataService, private identitySecurityService: IdentitySecurityService, public breakpointObserver: BreakpointObserver
  ) {
  }

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

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed
  }

  onClickContactMeHeaderData() {
    this.headerDataService.isContactMeOpen.next(true);
    this.toggleMenu()
  }

  onClickAddEditMeHeaderData() {
    if (this.headerDataService.addDeleteFeature.value) {
      this.headerDataService.addDeleteFeature.next(false);
    } else {
      this.headerDataService.addDeleteFeature.next(true);
    }
    this.toggleMenu()
  }

  onClickAdvanceSearchMeHeaderData() {
    if (this.headerDataService.isAdvancedSearch.value) {
      this.headerDataService.isAdvancedSearch.next(false);
    } else {
      this.headerDataService.isAdvancedSearch.next(true);
    }
    this.toggleMenu()
  }

  onClickHorizontalSearchHeaderData() {
    if (this.headerDataService.isHorizontalSearch.value) {
      this.headerDataService.isHorizontalSearch.next(false);
    } else {
      this.headerDataService.isHorizontalSearch.next(true);
    }
    this.toggleMenu()
  }

  onClickAddNewAddLandHeaderData() {
    if (this.userName){
      if (this.headerDataService.isAddNewAddLand.value) {
        this.headerDataService.isAddNewAddLand.next(false);
      } else {
        this.headerDataService.isAddNewAddLand.next(true);
      }
      this.toggleMenu()
    }else {
      this.router.navigate(['/auth/login']);
    }
  }

  onClickIsCreatLandAddeaderData() {
    if (this.headerDataService.isCreatLandAdd.value) {
      this.headerDataService.isCreatLandAdd.next(false);
    } else {
      this.headerDataService.isCreatLandAdd.next(true);
    }
    this.toggleMenu()
  }

  onClickErrorsReportHeaderData() {
    if (this.headerDataService.isCreatErrorsReport.value) {
      this.headerDataService.isCreatErrorsReport.next(false);
    } else {
      this.headerDataService.isCreatErrorsReport.next(true);
    }
    this.toggleMenu()
  }

  onClickIsMyLandsOpenHeaderData() {
    if (this.headerDataService.isMyLandsOpen.value) {
      this.headerDataService.isMyLandsOpen.next(false);
    } else {
      this.headerDataService.isMyLandsOpen.next(true);
    }
    this.toggleMenu()
  }

  redirectTo(url: string) {
    window.open(url, "_self");
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('yes')
          this.headerStyle = true;
        } else {
          this.headerStyle = false;
        }
      });
    this.userName = this.identitySecurityService.getUserName()
    this.isAdminLogin = this.identitySecurityService.isAdminLogin()
    // console.log( this.userName)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userName = this.identitySecurityService.getUserName()
    this.isAdminLogin = this.identitySecurityService.isAdminLogin()
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';
import {LayoutService} from '../../../services/layout.service';
import {NavService} from '../../../services/nav.service';
import {fadeInAnimation} from '../../../data/router-animation/router-animation';

@Component({
  selector: 'app-admin-content',
  templateUrl: './ClientContent.component.html',
  styleUrls: ['./ClientContent.component.scss'],
  animations: [fadeInAnimation]
})
export class ClientContentComponent implements OnInit, AfterViewInit {

  constructor(public navServices: NavService,
              public layout: LayoutService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
  }

}

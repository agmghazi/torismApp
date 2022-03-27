import {Component, Inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import Polygon from "@arcgis/core/geometry/Polygon";
import {DOCUMENT} from "@angular/common";
import {ShareGoogleWhatsAppService} from "../../../../services/share-google-whats-app.service";

@Component({
  selector: 'app-share-location',
  templateUrl: './share-location.component.html',
  styleUrls: ['./share-location.component.scss']
})
export class ShareLocationComponent implements OnInit {
  @Input() featureGraphic

  constructor(public activeModal: NgbActiveModal, @Inject(DOCUMENT) private document,
              private shareGoogleWhatsAppService: ShareGoogleWhatsAppService) {
  }

  ngOnInit(): void {
  }

  goToGoogleMap() {
    this.shareGoogleWhatsAppService.goToGoogleMap(this.featureGraphic.geometry.centroid.latitude,this.featureGraphic.geometry.centroid.longitude);
  }

  shareToWhatsapp() {
    this.shareGoogleWhatsAppService.shareToWhatsapp(this.featureGraphic.attributes.OBJECTID);
  }
}

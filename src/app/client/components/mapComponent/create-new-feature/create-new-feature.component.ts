import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {EsriComponentsService} from "../../../../services/esri-components.service";
import {FeaturesMapService} from "../../../../services/features-map.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-create-new-feature',
  templateUrl: './create-new-feature.component.html',
  styleUrls: ['./create-new-feature.component.scss']
})
export class CreateNewFeatureComponent implements OnInit, AfterViewInit {
  @Input() drawFeatureGraphic
  link

  constructor(public activeModal: NgbActiveModal, private esriComponentsService: EsriComponentsService,
              private featuresService: FeaturesMapService, private ngxLoader: NgxUiLoaderService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log(this.drawFeatureGraphic);
    console.log(this.drawFeatureGraphic.attributes.Name);
    console.log(this.drawFeatureGraphic.attributes.FolderPath);
    console.log(this.drawFeatureGraphic.attributes.VideoPath);
    this.returenVideoUrl()
  }
  // https://imgbb.com/
  returenVideoUrl() {
    const linkCode = this.drawFeatureGraphic.attributes.VideoPath.split("v=")[1];
    const link = `https://www.youtube.com/embed/${linkCode}`
    console.log('link', link)
    this.link= this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  ngAfterViewInit(): void {
    this.ngxLoader.stop();
  }
}

import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {EsriComponentsService} from "../../../../services/esri-components.service";
import {FeaturesMapService} from "../../../../services/features-map.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-create-new-feature',
  templateUrl: './create-new-feature.component.html',
  styleUrls: ['./create-new-feature.component.scss']
})
export class CreateNewFeatureComponent implements OnInit, AfterViewInit {
  @Input() drawFeatureGraphic

  constructor(public activeModal: NgbActiveModal, private esriComponentsService: EsriComponentsService,
              private featuresService: FeaturesMapService, private ngxLoader: NgxUiLoaderService,) {
  }

  ngOnInit(): void {
    console.log(this.drawFeatureGraphic);
    console.log(this.drawFeatureGraphic.attributes.Name);
  }


  ngAfterViewInit(): void {
    this.ngxLoader.stop();
  }
}

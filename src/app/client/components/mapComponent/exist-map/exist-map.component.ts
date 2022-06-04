import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { FeaturesMapService } from '../../../../services/features-map.service';

@Component({
  selector: 'app-exist-map',
  templateUrl: './exist-map.component.html',
  styleUrls: ['./exist-map.component.scss'],
})
export class ExistMapComponent implements OnInit {
  map;
  view;

  constructor(private featuresService: FeaturesMapService) {}

  initMap() {
    this.map = new Map({
      basemap: 'dark-gray-vector',
    });

    this.view = new MapView({
      container: 'viewDivExist',
      map: this.map,
      center: [44.62529763340373, 27.842369739402567],
      zoom: 4,
    });

    //this.view.ui.remove(['zoom']);

    this.featuresService.FeaturePolygonTourism(this.map, 1);
    this.featuresService.FeatureBusPointsTourism(this.map, 1);
    this.featuresService.Feature_sheraLinesTourism(this.map, 1);
    this.featuresService.Feature_RiyadhLinesTourism(
      this.featuresService.map,
      1
    );
    this.featuresService.FeatureKharjLinesTourism(this.map, 1);
    this.featuresService.FeatureAl_MajmaLinesTourism(
      this.featuresService.map,
      1
    );
    this.featuresService.FeatureSadirLinesTourism(this.map, 1);
  }

  ngOnInit(): void {
    this.initMap();
  }
}

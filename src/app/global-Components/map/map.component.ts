import {Component, Injectable, Input, NgZone, OnInit} from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import {FeaturesMapService} from '../../services/features-map.service';
import {Subject} from 'rxjs';
import Compass from '@arcgis/core/widgets/Compass';
import Home from '@arcgis/core/widgets/Home';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Track from '@arcgis/core/widgets/Track';
import {ShareDataService} from '../../services/share-data.service';
import * as watchUtils from '@arcgis/core/core/watchUtils';
import Query from '@arcgis/core/rest/support/Query';
import WebMap from '@arcgis/core/WebMap';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() mapStyle;
  isActive = false;
  cityName = '';

  constructor(private zone: NgZone, private featuresService: FeaturesMapService, private shareDataService: ShareDataService) {
  }

  initializeMap(): Promise<any> {

    this.featuresService.map = new Map({
      basemap: 'topo-vector',
      layers: []
    });


    this.featuresService.view = new MapView({
      container: 'viewDiv',
      map: this.featuresService.map,
      center: [44.62529763340373, 27.842369739402567],
      zoom: 6,
    });
    // 13
    (window as any)._view = this.featuresService.view;
    (window as any)._map = this.featuresService.map;

    this.featuresService.view.when(() => {
      // console.log(this.featuresService.map.allLayers.length);
      // console.log(this.featuresService.map.basemap.baseLayers.getItemAt(0));
      this.featuresService.map.basemap.baseLayers.getItemAt(0).opacity = 0;
    });

    this.featuresService.graphicsLayer = new GraphicsLayer();
    (window as any)._graphic = this.featuresService.graphicsLayer;
    this.shareDataService.isLoadService.subscribe((result) => {

    });

    this.featuresService.FeaturePointsTourism(this.featuresService.map, 1);
    this.featuresService.FeatureLinesTourism(this.featuresService.map, 1);
    this.featuresService.FeaturePolygonTourism(this.featuresService.map, 1);

    const trackWidget = new Track({
      view: this.featuresService.view
    });
    const homeWidget = new Home({
      view: this.featuresService.view,
    });
    const compass = new Compass({
      view: this.featuresService.view,
    });

    const basemapToggle = new BasemapToggle({
      view: this.featuresService.view,
      nextBasemap: 'satellite',
    });

    this.featuresService.view.ui.remove([
      {
        component: 'zoom',
        position: 'top-left',
        index: 3,
      },
    ]);

    this.featuresService.view.ui.add([
      {
        component: basemapToggle,
        position: 'bottom-right',
        index: 0,
      },
      {
        component: compass,
        position: 'top-left',
        index: 0,
      },
      {
        component: homeWidget,
        position: 'top-left',
        index: 1,
      },
      {
        component: trackWidget,
        position: 'top-left',
        index: 1,
      },
    ]);
    return this.featuresService.view.when();
  }


  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initializeMap()
        .then(() => {
          this.zone.run(() => {
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

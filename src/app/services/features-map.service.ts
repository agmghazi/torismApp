import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import {NgxUiLoaderConfig, NgxUiLoaderService, PB_DIRECTION, POSITION, SPINNER} from "ngx-ui-loader";
import {BehaviorSubject, Subject} from "rxjs";
import Query from "@arcgis/core/rest/support/Query";
import Geometry from "@arcgis/core/geometry/Geometry";
import {ShareDataService} from "./share-data.service";

@Injectable({
  providedIn: 'root'
})
export class FeaturesMapService {
  public arcgisUrl = 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/arcgis/rest/services/tourseGDB/FeatureServer';
  PointsTourism: FeatureLayer;
  LinesTourism: FeatureLayer;
  PolygonTourism: FeatureLayer;

  constructor(private ngxLoader: NgxUiLoaderService, private shareDataService: ShareDataService) {
  }
  view: any;
  map: any;
  graphicsLayer: GraphicsLayer;

  currentLoction: BehaviorSubject<object> = new BehaviorSubject({});

  arcgisOnline = "https://services6.arcgis.com/bnYnvAfPpPZFZXYA/arcgis/rest/services/"

  public UtilitiesServiceUrl =
    environment.arcgisServerUrl + 'Utilities/Geometry/GeometryServer';

  FeaturePointsTourism(mapInstance: Map, trans: number) {
    let PointSymbol:any = {
      type: "simple",
      symbol: {
        type: "picture-marker",
        url:
          "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
        width: "15px",
        height: "15px",
      },
    };
    let PointLabel:any = {
      symbol: {
        type: "text",
        color: "red",
        haloColor: "white",
        haloSize: "1.5px",
        font: {
          size: "16px",
          family: "arial",
          weight: "normal",
        },
      },
      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: "$feature.Name",
      },
    };

    this.PointsTourism = new FeatureLayer({
      url: this.arcgisUrl + '/0',
      opacity: trans,
      outFields: ["*"],
      popupEnabled: true,
      renderer: PointSymbol,
      labelingInfo: [PointLabel],
    });
    mapInstance.add(this.PointsTourism);
  }

  FeatureLinesTourism(mapInstance: Map, trans: number) {
    this.LinesTourism = new FeatureLayer({
      url: this.arcgisUrl + '/1',
      opacity: trans,
    });
    mapInstance.add(this.LinesTourism);
  }

  FeaturePolygonTourism(mapInstance: Map, trans: number) {
    let citiesRenderer:any = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
        color: [ 255, 128, 0, 0.1 ],
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 1,
          color:  [ 255, 128, 0 ],
        }
      }
    };

    this.PolygonTourism = new FeatureLayer({
      url: this.arcgisUrl + '/2',
      opacity: trans,
      renderer: citiesRenderer,
    });
    mapInstance.add(this.PolygonTourism);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.currentLoction.next({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    });
  }
}

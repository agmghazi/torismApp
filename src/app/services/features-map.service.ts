import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderService,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';
import {BehaviorSubject, Subject} from 'rxjs';
import Query from '@arcgis/core/rest/support/Query';
import Geometry from '@arcgis/core/geometry/Geometry';
import {ShareDataService} from './share-data.service';

@Injectable({
  providedIn: 'root',
})
export class FeaturesMapService {
  public arcgisUrl =
    'https://services8.arcgis.com/cwvckvMxGVdXmqFV/arcgis/rest/services/touristmap/FeatureServer';
  PointsTourism: FeatureLayer;
  sheraLinesTourism: FeatureLayer;
  RiyadhLines: FeatureLayer;
  KharjLines: FeatureLayer;
  Al_MajmaLines: FeatureLayer;
  SadirLines: FeatureLayer;
  PolygonTourism: FeatureLayer;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private shareDataService: ShareDataService
  ) {
  }

  view: any;
  map: any;
  graphicsLayer: GraphicsLayer;

  currentLoction: BehaviorSubject<object> = new BehaviorSubject({});

  public UtilitiesServiceUrl =
    environment.arcgisServerUrl + 'Utilities/Geometry/GeometryServer';

  FeaturePointsTourism(mapInstance: Map, trans: number) {
    // polygon render
    // let renderer = {
    //   type: "unique-value",  // autocasts as new UniqueValueRenderer()
    //   field: "REGION",
    //   defaultSymbol: { type: "simple-fill" },  // autocasts as new SimpleFillSymbol()
    //   uniqueValueInfos: [{
    //     // All features with value of "North" will be blue
    //     value: "North",
    //     symbol: {
    //       type: "simple-fill",  // autocasts as new SimpleFillSymbol()
    //       color: "blue"
    //     }
    //   }, {
    //     // All features with value of "East" will be green
    //     value: "East",
    //     symbol: {
    //       type: "simple-fill",  // autocasts as new SimpleFillSymbol()
    //       color: "green"
    //     }
    //   }, {
    //     // All features with value of "South" will be red
    //     value: "South",
    //     symbol: {
    //       type: "simple-fill",  // autocasts as new SimpleFillSymbol()
    //       color: "red"
    //     }
    //   }, {
    //     // All features with value of "West" will be yellow
    //     value: "West",
    //     symbol: {
    //       type: "simple-fill",  // autocasts as new SimpleFillSymbol()
    //       color: "yellow"
    //     }
    //   }],
    //   visualVariables: [{
    //     type: "opacity",
    //     field: "POPULATION",
    //     normalizationField: "SQ_KM",
    //     // features with 30 ppl/sq km or below are assigned the first opacity value
    //     stops: [{ value: 100, opacity: 0.15 },
    //       { value: 1000, opacity: 0.90 }]
    //   }]
    // };
    //
    // let layer = new FeatureLayer({
    //   url: "http://url.to.service",
    //   renderer: renderer
    // });
    let renderer: any = {
      type: 'unique-value',
      field: 'codpath',
      defaultSymbol: {type: 'simple'},
      uniqueValueInfos: [
        {
          value: 'متحف',
          symbol: {
            type: 'picture-marker',
            url: 'http://static.arcgis.com/images/Symbols/Basic1/Black_Museum.png',
            width: '25px',
            height: '25px',
          },
        },
        {
          value: 'سوق',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Homeless-Food-Assistance.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'قرية تراثية',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Probationers.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مسجد',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Community-Center.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'برج',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Animal-Problems-Received.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'كهف',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Cooling-Center.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مركز ثقافي',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Damaged-Public-Facilities-Category-C.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مصنع',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Damaged-Residential-Buildings-Major.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مرصد فلكي',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Department-of-Public-Works.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'غار',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Divided-Highway-Ends.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مكتبة',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Food-Preparation.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مجلس',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Damaged-Residential-Buildings-Minor.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'جبل',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Biosolids-Permit.png"',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مدرسة',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Artifical-Reef-Site.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'بيت',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Blight-Problems-Completed.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'جبل',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Blight-Problems-Submitted.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'قصر',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Building-Problems-Completed.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'مرصد فلكي',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Aquatic-Resource-Alteration-Permit.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'سد',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Damaged-Public-Facilities-Category-C.png',
            width: '15px',
            height: '15px',
          },
        },
        {
          value: 'قرية ترلثية',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Emergency-Assistance.png',
            width: '15px',
            height: '15px',
          },
        }, {
          value: 'باب',
          symbol: {
            type: 'picture-marker',
            url: 'https://static.arcgis.com/images/Symbols/Government/Food-Preparation.png',
            width: '15px',
            height: '15px',
          },
        }],
    };
    // let PointSymbol: any = {
    //   type: 'simple',
    //   symbol: {
    //     type: 'picture-marker',
    //     url: 'http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png',
    //     width: '15px',
    //     height: '15px',
    //   },
    // };
    let PointLabel: any = {
      symbol: {
        type: 'text',
        color: 'red',
        haloColor: 'white',
        haloSize: '1.5px',
        font: {
          size: '16px',
          family: 'arial',
          weight: 'normal',
        },
      },
      labelPlacement: 'above-center',
      labelExpressionInfo: {
        expression: '$feature.Name',
      },
    };

    this.PointsTourism = new FeatureLayer({
      url: this.arcgisUrl + '/0',
      opacity: trans,
      outFields: ['*'],
      popupEnabled: true,
      renderer: renderer,
      labelingInfo: [PointLabel],
    });
    mapInstance.add(this.PointsTourism);
  }

  FeatureBusPointsTourism(mapInstance: Map, trans: number) {
    let PointSymbol: any = {
      type: 'simple',
      symbol: {
        type: 'picture-marker',
        url: 'http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png',
        width: '15px',
        height: '15px',
      },
    };
    let PointLabel: any = {
      symbol: {
        type: 'text',
        color: 'red',
        haloColor: 'white',
        haloSize: '1.5px',
        font: {
          size: '16px',
          family: 'arial',
          weight: 'normal',
        },
      },
      labelPlacement: 'above-center',
      labelExpressionInfo: {
        expression: '$feature.Name',
      },
    };

    this.PointsTourism = new FeatureLayer({
      url: this.arcgisUrl + '/1',
      opacity: trans,
      outFields: ['*'],
      popupEnabled: true,
      renderer: PointSymbol,
      labelingInfo: [PointLabel],
    });
    mapInstance.add(this.PointsTourism);
  }

  Feature_sheraLinesTourism(mapInstance: Map, trans: number) {
    var lineSymbol:any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        cap: "round",
        color: [0, 0, 255, 1],
        width: "5px",
        style: "solid",
      },
    };

    this.sheraLinesTourism = new FeatureLayer({
      url: this.arcgisUrl + '/2',
      opacity: trans,
      renderer: lineSymbol,
    });
    mapInstance.add(this.sheraLinesTourism);
  }

  Feature_RiyadhLinesTourism(mapInstance: Map, trans: number) {
    var lineSymbol:any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        cap: "round",
        color: [255, 165, 0, 1],
        width: "5px",
        style: "solid",
      },
    };
    this.RiyadhLines = new FeatureLayer({
      url: this.arcgisUrl + '/3',
      opacity: trans,
      renderer: lineSymbol,
    });
    mapInstance.add(this.RiyadhLines);
  }

  FeatureKharjLinesTourism(mapInstance: Map, trans: number) {
    var lineSymbol:any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        cap: "round",
        color: [255,0,255, 1],
        width: "5px",
        style: "solid",
      },
    };
    this.KharjLines = new FeatureLayer({
      url: this.arcgisUrl + '/4',
      opacity: trans,
      renderer: lineSymbol,
    });
    mapInstance.add(this.KharjLines);
  }

  FeatureAl_MajmaLinesTourism(mapInstance: Map, trans: number) {
    var lineSymbol:any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        cap: "round",
        color: [0, 255, 255, 1],
        width: "5px",
        style: "solid",
      },
    };
    this.Al_MajmaLines = new FeatureLayer({
      url: this.arcgisUrl + '/5',
      opacity: trans,
      renderer: lineSymbol,
    });
    mapInstance.add(this.Al_MajmaLines);
  }

  FeatureSadirLinesTourism(mapInstance: Map, trans: number) {
    var lineSymbol:any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        cap: "round",
        color: [255,0,0, 1],
        width: "5px",
        style: "solid",
      },
    };
    this.SadirLines = new FeatureLayer({
      url: this.arcgisUrl + '/6',
      opacity: trans,
      renderer: lineSymbol,
    });
    mapInstance.add(this.SadirLines);
  }

  FeaturePolygonTourism(mapInstance: Map, trans: number) {
    let citiesRenderer: any = {
      type: 'simple', // autocasts as new SimpleRenderer()
      symbol: {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: [255, 128, 0, 0.1],
        outline: {
          // autocasts as new SimpleLineSymbol()
          width: 1,
          color: [255, 128, 0],
        },
      },
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
        longitude: pos.coords.longitude,
      });
    });
  }
}

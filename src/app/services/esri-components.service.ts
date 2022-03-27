import {Injectable} from '@angular/core';
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Swal from "sweetalert2";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {FeaturesMapService} from "./features-map.service";
import Polygon from "@arcgis/core/geometry/Polygon";
import Point from '@arcgis/core/geometry/Point';

@Injectable({
  providedIn: 'root'
})
export class EsriComponentsService {
  constructor(private ngxLoader: NgxUiLoaderService, private featuresService: FeaturesMapService) {
  }

  createGraphic(geometry, symbol, attributes?) {
    return new Graphic({
      geometry: geometry,
      symbol: symbol,
      attributes: attributes,
    });
  }

  featureGeometry(type, features, wKid) {
    let obj = {
      type: type,
      spatialReference: {
        wkid: wKid,
      }
    };
    switch (type) {
      case 'polyline':
        obj['paths'] = features;
        break;
      case 'polygon':
        obj['rings'] = features;
    }
    return obj;
  }

  polygonSymbol(type, color, style, outlineColor, width) {
    return {
      type: type,
      color: color,
      style: style,
      outline: {
        color: outlineColor,
        width: width,
      },
    };
  }

  saveGeometry(feature: FeatureLayer, graphics, type, showMessage) {
    let graphicShapes
    if (type == "add") {
      graphicShapes = {
        addFeatures: graphics,
      };
    } else if (type == "edit") {
      graphicShapes = {
        updateFeatures: graphics,
      };
    } else if (type == "delete") {
      graphicShapes = {
        deleteFeatures: graphics,
      };
    }
    feature
      .applyEdits(graphicShapes)
      .then((results) => {
        console.log(results)
      }).then(() => {
      if (showMessage) {
        Swal.fire({
          title: '! التحديث',
          text: 'تم التحديث بنجاح',
          icon: 'success',
          confirmButtonText: 'حسنا'
        })
      }
      this.ngxLoader.stop();
      this.featuresService.view.zoom = this.featuresService.view.zoom - 1
    })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          title: '! خطئ',
          text: 'لم يتم الحفظ يرجي الاضافة مره ثانية',
          icon: 'error',
          confirmButtonText: 'حسنا'
        })
        this.ngxLoader.stop();
      });
  }

  requestOptions(body?, returnCountOnly?: boolean, returnGeometry?: boolean, spatialRel?: string, geometry?: any, inSR?: string, outSR?: string, where?: string) {
    return {
      responseType: 'json',
      body: body,
      query: {
        f: 'json',
        returnCountOnly: returnCountOnly,
        outFields: '*',
        where: where,
        returnGeometry: returnGeometry,
        spatialRel: spatialRel,
        geometry: geometry,
        inSR: inSR,
        outSR: outSR,
      },
    };
  }

  zoomToLayer(type, geometry, wiki, ZoomLevel) {
    let fGetFeature: any
    switch (type) {
      case 'polygon':
        fGetFeature = new Polygon({
          rings: geometry,
          spatialReference: {
            wkid: wiki
          },
        });
        break;
      case 'point':
        fGetFeature = new Point({
          x: geometry.x,
          y: geometry.y,
          spatialReference: {
            wkid: wiki,
          },
        });
        break;
    }

    if (ZoomLevel) {
      let opts = {
        duration: 5000
      };
      this.featuresService.view.goTo({
        target: fGetFeature,
        zoom: 17
      }, opts);
    } else {
      this.featuresService.view.goTo(fGetFeature);
    }
  }
}

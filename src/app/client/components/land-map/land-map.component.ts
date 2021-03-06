import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { FeaturesMapService } from '../../../services/features-map.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MapComponent } from '../../../global-Components/map/map.component';
import Swal from 'sweetalert2';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import Request from '@arcgis/core/request';
import Polygon from '@arcgis/core/geometry/Polygon';
import { HeaderDataService } from '../../../services/header-data.service';
import { EsriComponentsService } from '../../../services/esri-components.service';
import { IdentitySecurityService } from '../../../services/identity-security.service';
import { CreateNewFeatureComponent } from '../mapComponent/create-new-feature/create-new-feature.component';
import { ActivatedRoute, Params } from '@angular/router';
import { ShareLocationComponent } from '../mapComponent/share-location/share-location.component';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { ShareDataService } from '../../../services/share-data.service';
import { Title } from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import Locate from '@arcgis/core/widgets/Locate';
import Graphic from '@arcgis/core/Graphic';
import WebMap from '@arcgis/core/WebMap';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import ProjectParameters from '@arcgis/core/rest/support/ProjectParameters';
import Point from '@arcgis/core/geometry/Point';
import GeometryService from '@arcgis/core/tasks/GeometryService';
import Sketch from '@arcgis/core/widgets/Sketch';
import * as geometryEngineAsync from '@arcgis/core/geometry/geometryEngineAsync';
import Search from '@arcgis/core/widgets/Search';

@Component({
  selector: 'app-land-map',
  templateUrl: './land-map.component.html',
  styleUrls: ['./land-map.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class LandMapComponent implements OnInit {
  type: 'facebook' | 'twitter';
  shareUrl: string = 'http://localhost:4200/client/home/landMap';
  navUrl: string;
  mapStyle = '';
  featureGraphic: any;
  isContactMeOpen = false;
  lineMeasurements;
  getInforamtions: boolean = false;
  @ViewChild('mapDiv', { static: false }) mapDiv: ElementRef;
  @ViewChild('measurements', { static: false }) measurements: ElementRef;

  constructor(
    private zone: NgZone,
    private featuresService: FeaturesMapService,
    private mapComponent: MapComponent,
    private modalService: NgbModal,
    private ngxLoader: NgxUiLoaderService,
    private activeModal: NgbActiveModal,
    private headerDataService: HeaderDataService,
    private esriComponentsService: EsriComponentsService,
    private titleService: Title,
    private shareDataService: ShareDataService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.titleService.setTitle('???????????? ????????????????');
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('yes');
          this.mapStyle = 'height: 100vh;width: 100vw';
        } else {
          this.mapStyle = 'height: 99.6vh;width: 100vw';
        }
      });
  }

  ngAfterViewInit(): void {
    this.featuresService.map.add(this.featuresService.graphicsLayer);
    this.openStaticPages();
    this.getAttributeData();
    this.searchBar();
    this.createPathsWithLength();
  }

  searchBar() {
    const searchWidget = new Search({
      view: this.featuresService.view,
      allPlaceholder: '??????????',
      includeDefaultSources: false,
      sources: [
        {
          // @ts-ignore
          layer: this.featuresService.PointsTourism,
          searchFields: ['Name'],
          displayField: 'Name',
          exactMatch: false,
          outFields: ['Name', 'Station'],
          name: '?????????????? ????????????????',
          placeholder: '???????? ?????? ????????????',
        },
      ],
    });
    this.featuresService.view.ui.add(searchWidget, 'top-right');
  }

  runAnimation() {
    this.featuresService.view.on('click', (event) => {
      this.featuresService.view.hitTest(event).then((response) => {
        if (response.results.length) {
          let graphic = response.results.filter((result) => {
            if (result.graphic.layer.layerId === 3) return result.graphic;
          });
          console.log(graphic);
          if (graphic.length > 0) {
            console.log(graphic[0].graphic);
            this.animateLine(graphic[0].graphic.geometry);

            // let geomSer = new GeometryService({
            //   url: this.featuresService.UtilitiesServiceUrl,
            // });
            //
            //   let paramsCutting = new ProjectParameters({
            //     geometries: [graphic[0].graphic.geometry],
            //     outSpatialReference: SpatialReference.WebMercator,
            //     transformForward:true
            //   });
            //   geomSer.project(paramsCutting).then((result) => {
            //     console.log('result',result);
            //   });
          }
        }
      });
    });
  }

  createPathsWithLength() {
    const sketch = new Sketch({
      layer: this.featuresService.graphicsLayer,
      view: this.featuresService.view,
      availableCreateTools: ['polyline'],
      creationMode: 'update',
      // @ts-ignore
      updateOnGraphicClick: true,
      visibleElements: {
        createTools: {
          point: false,
          circle: false,
        },
        selectionTools: {
          'lasso-selection': false,
          'rectangle-selection': false,
        },
        settingsMenu: false,
        undoRedoMenu: false,
      },
    });
    this.featuresService.view.ui.add(sketch, 'top-right');

    var root = this;

    function getLength(line) {
      geometryEngineAsync.planarLength(line, 'kilometers').then((result) => {
        root.lineMeasurements = Number(result).toFixed(2) + '???????? ??????';
      });
    }

    function switchType(geom) {
      switch (geom.type) {
        case 'polyline':
          getLength(geom);
          break;
        default:
          console.log('No value found');
      }
    }

    sketch.on('update', (e) => {
      const geometry = e.graphics[0].geometry;

      if (e.state === 'start') {
        switchType(geometry);
      }

      if (e.state === 'complete') {
        this.featuresService.graphicsLayer.remove(
          this.featuresService.graphicsLayer.graphics.getItemAt(0)
        );
        root.lineMeasurements = '';
      }

      if (
        e.toolEventInfo &&
        (e.toolEventInfo.type === 'scale-stop' ||
          e.toolEventInfo.type === 'reshape-stop' ||
          e.toolEventInfo.type === 'move-stop')
      ) {
        switchType(geometry);
      }
    });
  }

  createGraphic(path: any) {
    this.featuresService.graphicsLayer.removeAll();
    let polyline: any = {
      type: 'polyline',
      paths: path,
      spatialReference: 102100,
    };

    let lineSymbol: any = {
      type: 'simple-line', // autocasts as SimpleLineSymbol()
      color: [226, 119, 40],
      width: 7,
    };

    let polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: lineSymbol,
    });
    // console.log('Add polyline', polylineGraphic);
    // this.featuresService.view.graphics.add(polylineGraphic);

    this.featuresService.graphicsLayer.graphics.add(polylineGraphic);
  }

  distance(pointA, pointB) {
    const a = pointA[0] - pointB[0];
    const b = pointA[1] - pointB[1];
    return Math.sqrt(a * a + b * b);
  }

  animateLine(geometry) {
    console.log('geometry', geometry);
    const AREA_ANIMATION_DURATION = 20000;
    const path = geometry.paths[0];
    const start = path[0];
    console.log('start', start);
    const waypoints = path.slice(1);
    console.log('waypoints', waypoints);
    let wayPointNum = waypoints.length - 1;
    waypoints.push(start);

    const durations = [];
    const splineDurations = [0];
    let totalLength = 0;

    waypoints.forEach((point, index) => {
      const length = this.distance(point, path[index]);
      durations.push(length);
      totalLength += length;
    });

    let splineIndex = 0;
    durations.forEach((duration, index) => {
      durations[index] = (duration * AREA_ANIMATION_DURATION) / totalLength;
      splineDurations[splineIndex] += durations[index];
    });

    const paths = [start];

    const movingPoint = {
      spatialReference: SpatialReference.WebMercator,
      x: start[0],
      y: start[1],
    };
    var root = this;

    function updateAnimation() {
      if (paths.length) {
        root.createGraphic(paths.concat([[movingPoint.x, movingPoint.y]]));
      }
    }

    function completeAnimation() {
      paths.push([movingPoint.x, movingPoint.y]);
    }

    let index = 0;
    let startTime = null;
    let p1 = null;

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
        p1 = [movingPoint.x, movingPoint.y];
      }
      var progress = timestamp - startTime;
      const sp = Math.min(1.0, progress / durations[index]);
      // console.log('waypoints', waypoints);
      movingPoint.x = p1[0] + (waypoints[index][0] - p1[0]) * sp;
      movingPoint.y = p1[1] + (waypoints[index][1] - p1[1]) * sp;
      updateAnimation();
      if (progress >= durations[index]) {
        completeAnimation();
        // console.log('index', index);
        console.log('wayPointNum', wayPointNum);
        if (index < wayPointNum) {
          startTime = timestamp + (durations[index] - progress);
          p1 = [movingPoint.x, movingPoint.y];
          index++;
        } else {
          return;
        }
      }
      (window as any).requestAnimationFrame(step);
    }

    (window as any).requestAnimationFrame(step);
  }

  getAttributeData() {
    this.featuresService.view.on('click', (event) => {
      this.featuresService.view.hitTest(event).then((response) => {
        if (response.results.length) {
          let graphicPointsTourism = response.results.filter((result) => {
            if (result.graphic.layer.layerId === 0) return result.graphic;
          });
          console.log(graphicPointsTourism);
          if (graphicPointsTourism.length > 0) {
            this.featureGraphic = graphicPointsTourism[0].graphic;
            if (!this.modalService.hasOpenModals()) {
              const modalRef = this.modalService.open(
                CreateNewFeatureComponent,
                {
                  windowClass: 'modal-popUP',
                  backdrop: false,
                  scrollable: true,
                }
              );
              console.log('this.featureGraphic', this.featureGraphic);
              modalRef.componentInstance.drawFeatureGraphic =
                this.featureGraphic;
            }
          }
        }
      });
    });
  }

  openStaticPages() {
    this.headerDataService.isContactMeOpen.subscribe((result) => {
      this.isContactMeOpen = !!result;
    });
  }

  createNavigationUrl(type) {
    let searchParams = new URLSearchParams();
    switch (type) {
      case 'facebook':
        searchParams.set('u', this.shareUrl);
        this.navUrl =
          'https://www.facebook.com/sharer/sharer.php?' + searchParams;
        window.open(this.navUrl, '_blank');
        break;
      case 'twitter':
        searchParams.set('url', this.shareUrl);
        this.navUrl = 'https://twitter.com/share?' + searchParams;
        window.open(this.navUrl, '_blank');
        break;
    }
  }
}

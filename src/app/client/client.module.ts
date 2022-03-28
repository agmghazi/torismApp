import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { ClientRoutingModule } from './client-routing.module';
import { LandMapComponent } from './components/land-map/land-map.component';
import {MapComponent} from "../global-Components/map/map.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { CreateNewFeatureComponent } from './components/mapComponent/create-new-feature/create-new-feature.component';
import { ShareLocationComponent } from './components/mapComponent/share-location/share-location.component';
import { ExistMapComponent } from './components/mapComponent/exist-map/exist-map.component';


@NgModule({
  declarations: [
    LandMapComponent,
    MapComponent,
    ContactMeComponent,
    CreateNewFeatureComponent,
    ShareLocationComponent,
    ExistMapComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule
  ]
})
export class ClientModule { }

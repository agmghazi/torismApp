import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandMapComponent} from "./components/land-map/land-map.component";

const routes: Routes = [
  { path: '', redirectTo: 'landMap', pathMatch: 'full' },
  {
    path: 'landMap',
    component: LandMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

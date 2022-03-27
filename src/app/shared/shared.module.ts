import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTableComponent } from './components/data-table/data-table.component';
import {SortableDirective} from "./components/data-table/sortable.directive";
// Components
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {AdminHeaderComponent} from './components/headers/admin-header/AdminHeaderComponent';
import {ClientHeaderComponent} from './components/headers/client-header/ClientHeaderComponent';
import {AdminContentComponent} from './components/layout/admin-content/AdminContentComponent';
import {LoaderComponent} from './components/loader/loader.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

// Services
import {LayoutService} from './services/layout.service';
import {NavService} from './services/nav.service';
import {ErrorMessageComponent} from './components/error-message/error-message.component';
import {ClientContentComponent} from "./components/layout/client-content/ClientContent.component";

@NgModule({
  declarations: [
    AdminHeaderComponent,
    ClientHeaderComponent,
    SidebarComponent,
    AdminContentComponent,
    ClientContentComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    LoaderComponent,
    ErrorMessageComponent,
    SortableDirective,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    NavService,
    LayoutService,

  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    ErrorMessageComponent,
    DataTableComponent,
  ],
})
export class SharedModule {
}

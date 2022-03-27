import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminContentComponent} from './shared/components/layout/admin-content/AdminContentComponent';
import {homeRoutes} from './shared/routes/routes';
import {ClientContentComponent} from "./shared/components/layout/client-content/ClientContent.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/client/home/landMap',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminContentComponent,
    children: homeRoutes,
  },
  {
    path: 'client',
    component: ClientContentComponent,
    children: homeRoutes,
  }
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        relativeLinkResolution: 'legacy',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

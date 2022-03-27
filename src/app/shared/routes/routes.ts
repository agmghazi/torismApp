import {Routes} from '@angular/router';
import {LoaderComponent} from '../components/loader/loader.component';

export const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'panel',
    loadChildren: () => import('../../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../../client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'global-Components/loader',
    component: LoaderComponent,
  },
];



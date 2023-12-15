import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'prophecy',
    loadChildren: () => import('prophecy/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'evolution',
    loadChildren: () => import('evolution/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'universe',
    loadChildren: () => import('universe/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

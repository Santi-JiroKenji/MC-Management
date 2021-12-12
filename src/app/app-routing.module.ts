import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/base-component/main-layout/main-layout.component';

const appRoutes: Routes = [
  // {
  //   path: 'monitor',
  //   loadChildren: () => 
  //   import('./pages/monitor/monitor.module').then(m => m.MonitorModule),
  // },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'monitor',
        loadChildren: () =>
        import('./pages/monitor/monitor.module').then(m => m.MonitorModule),
      },
      {
        path: 'consumer',
        loadChildren: () =>
        import('./pages/consumer/consumer.module').then(m => m.ConsumerModule),
      },
      {
        path: 'servers',
        loadChildren: () =>
        import('./pages/servers/servers.module').then(m => m.ServerModule),
      },
      {
        path: 'providers',
        loadChildren: () =>
        import('./pages/providers/providers.module').then(m => m.ProviderModule),
      },
      {
        path: 'packages',
        loadChildren: () =>
        import('./pages/packages/packages.module').then(m => m.PackagesModule),
      },
      {
      path: '',
      redirectTo: 'monitor',
      pathMatch: 'full',
      },
    ],
  },
];


export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  {
    enableTracing: false,
    useHash: true,
  }
);

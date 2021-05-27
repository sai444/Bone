import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './../app/pages/authentication/login/login.component';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/components/layout/full-layout/full-layout.component';
import { content } from "./shared/routes/content-routes";
import { full } from './shared/routes/full.routes';
import { AdminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/login/video',
    pathMatch: 'full'
  },
  {
    path: 'authentication/login/video',
    component: LoginComponent
  },

  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AdminGuard],
    children: content
  },
  {
    path: '',
    component: FullLayoutComponent,
    // canActivate: [AdminGuard],
    children: full
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

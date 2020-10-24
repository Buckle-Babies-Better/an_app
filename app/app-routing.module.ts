import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'specialguide',
    loadChildren: () => import('./specialguide/specialguide.module').then( m => m.SpecialguidePageModule)
  },
  {
    path: 'defaultguide',
    loadChildren: () => import('./defaultguide/defaultguide.module').then( m => m.DefaultguidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

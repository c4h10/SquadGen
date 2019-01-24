import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DialsViewComponent } from './components/dials-view/dials-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full',
    data: {
      path: '/',
      isSquadView: true
    }
  },
  {
    path: 'squad',
    component: MainViewComponent,
    pathMatch: 'full',
    data: {
      path: '/squad',
      isSquadView: true
    }
  },
  {
    path: 'dials',
    component: DialsViewComponent,
    pathMatch: 'full',
    data: {
      path: '/dials',
      isSquadView: false
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

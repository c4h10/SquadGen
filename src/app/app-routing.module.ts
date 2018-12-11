import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full',
    data: {
      isTabView: true
    }
  },

  {
    path: 'admin',
    component: MainViewComponent,
    pathMatch: 'full',
    data: {
      isTabView: false
    }
  },
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

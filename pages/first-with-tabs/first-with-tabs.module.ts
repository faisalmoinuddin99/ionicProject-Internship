import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabsPage } from './first-with-tabs.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabsPage,
    children:[{
      path:'tab1',
      loadChildren:'./pages/tab1/tab1.module#Tab1PageModule'
    },{
      path:'tab2',
      loadChildren:'./pages/tab2/tab2.module#Tab2PageModule'
    }]
  
  },
  {
    path: '',
    redirectTo:'tabs/tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}

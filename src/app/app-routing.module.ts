import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // this is pointing at the data-item module as the default route
    path: '',
    redirectTo: 'data-items',
    pathMatch: 'full'
  },
  {
    path: 'data-items',
    loadChildren: () => import('./data-item/data-item.module').then(m => m.DataItemModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

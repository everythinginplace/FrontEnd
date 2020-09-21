import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemComponent } from './components/item.component';
import { DataItemRoutingModule } from './data-item-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    DataItemRoutingModule
  ]
})
export class DataItemModule { }

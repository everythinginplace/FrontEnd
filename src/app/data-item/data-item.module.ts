import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemComponent } from './components/item/item.component';
import { DataItemRoutingModule } from './data-item-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataItemRoutingModule
  ]
})
export class DataItemModule { }

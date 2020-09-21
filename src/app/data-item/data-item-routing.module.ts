import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
            data: DataResolverService
        }
    },
    {
        // this is pointing at the data-item dashboard as the default route
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [routing]
})

export class DataItemRoutingModule { }
  
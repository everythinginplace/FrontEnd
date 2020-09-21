import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataItemService } from './data.item.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve <Promise<any>>{

  constructor(private dataItemService: DataItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.dataItemService.getItems();
  }
}
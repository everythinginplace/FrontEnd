import { Component, Input } from '@angular/core';
import { DataItem } from '../shared/data.item';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html'
})
export class ItemComponent  {
    @Input()item: DataItem;
}
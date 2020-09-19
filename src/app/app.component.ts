import { Component } from '@angular/core';
// import { DataItem } from '../shared/data.item';
// import { DataItemService } from '../shared/data.item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rich-front-end';
//  dataIsLoaded = false;
//  items: DataItem[];

//  constructor(private dataItemService: DataItemService) { }

  ngOnInit() {
    // this.dataItemService.getItems().then((data) => {
    //   this.items = data;
    //   this.dataIsLoaded = true;
    // });
  }
}

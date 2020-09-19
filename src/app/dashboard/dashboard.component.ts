import { Component, OnInit } from '@angular/core';
import { DataItem } from '../shared/data.item'
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'rich-front-end Dashboard';
  items: DataItem[];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.items = this.route.snapshot.data.data;
  }

}

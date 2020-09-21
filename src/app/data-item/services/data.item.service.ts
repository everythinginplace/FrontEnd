import { JsonPlaceholderService } from './json.placeholder.service';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataItem } from '../shared/data.item';

@Injectable({providedIn: 'root'})
export class DataItemService {
    constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

    getItems() {
        return new Promise<DataItem[]>((resolve, reject) => {
            forkJoin([
                this.jsonPlaceholderService.getAlbums(),
                this.jsonPlaceholderService.getUsers(),
                this.jsonPlaceholderService.getPosts()
            ])
            .subscribe(data => {
                const [ albums, users, posts ] = data;
                var results = [];
                for (let i = 0; i < 30; i++) {
                    var album = this.getRandomItem(albums);
                    var user = this.getRandomItem(users);
                    var post = this.getRandomItem(posts);
                    results.push({ album, user, post });
                }
                resolve(results);
            });
        });
    }

    private getRandomItem(array: Array<any>): any {
        return array[Math.floor(Math.random() * array.length)];
      }    
  }
import { Component, OnInit, Input } from '@angular/core';

import { Feed } from 'src/app/models/feed';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.css']
})
export class NetworkPageComponent implements OnInit {

  @Input() resturant:string;

  feeds: Feed[] = [];

  selectedFeed: Feed;

  feedList: Feed[] = [];

  errorFeed: boolean = false;

  constructor(
    private feedService: FoodService
  ) { }

  ngOnInit(): void {
    this.fetchFeed();
  }

  fetchFeed() {
    this.feedService.getFeeds().subscribe((data: Feed[]) => {
      this.feeds = data
    })
  }

  addToCart(item) {
    if (this.feedList.indexOf(item) === -1) {
      this.feedList.push(item);

      this.errorFeed = false;
    } else if (this.feedList.indexOf(item) > -1) {
      this.errorFeed = true;
    }
  }

  removeFeed(item) {
    var index = this.feedList.indexOf(item, 0);

    if (index > -1) {
      this.feedList.splice(index, 1);
    }
  }

}

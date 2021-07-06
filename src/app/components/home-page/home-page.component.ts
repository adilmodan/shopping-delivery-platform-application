import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  feed: Feed[] = []
  searchBox: string;
  isDataFetched: boolean;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.isDataFetched = false;
  }

  handleSubmit() {
    console.log(this.searchBox)

    this.foodService.getFeeds().subscribe((data: Feed[]) => {
      this.feed = data;
      this.isDataFetched = true;
    })
  }
}

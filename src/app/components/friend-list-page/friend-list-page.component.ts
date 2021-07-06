import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service'

@Component({
  selector: 'app-friend-list-page',
  templateUrl: './friend-list-page.component.html',
  styleUrls: ['./friend-list-page.component.css']
})
export class FriendListPageComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;

  friendsList: any[] = []
  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.getFriendsList().subscribe((data: any) => {
      this.friendsList = data
    })
  }

  closeAlert() {
    this.alert.nativeElement.classList.add('hide');
  }

  addFriend() {
    this.alert.nativeElement.classList.remove('hide');
  }
}

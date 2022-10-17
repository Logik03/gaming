import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'poker.component.html' })

export class PokerComponent implements OnInit {

  pokerGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds:Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Poker';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.pokerGames = this.getFeeds.getFeedsByCategory(allFeeds, 'poker');
    })

  }

}
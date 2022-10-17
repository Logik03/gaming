import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'blackjack.component.html' })

export class BlackjackComponent implements OnInit {

  blackjackGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds: Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Blackjack';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.blackjackGames = this.getFeeds.getFeedsByCategory(allFeeds, 'blackjack');
    })

  }

}
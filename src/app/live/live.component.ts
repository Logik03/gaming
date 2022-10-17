import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'live.component.html' })

export class LiveComponent implements OnInit {

  liveGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds: Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Live';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.liveGames = this.getFeeds.getFeedsByCategory(allFeeds, 'jackpot');
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'slotgames.component.html' })

export class SlotGamesComponent implements OnInit {

  slotGames= [];
  componentName : string

  constructor(private feed: FeedService,
              private route: ActivatedRoute,
              private router: Router,
              private getFeeds: Function) { }




  ngOnInit() {
    this.componentName = 'Slot';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.slotGames = this.getFeeds.getFeedsByCategory(allFeeds, 'slots');
    })

  }

}
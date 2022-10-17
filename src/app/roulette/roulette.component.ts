import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'roulette.component.html' })

export class RouletteComponent implements OnInit {

  rouletteGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds: Function
  ) { }




  ngOnInit() {
    this.componentName = 'Roulette';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.rouletteGames = this.getFeeds.getFeedsByCategory(allFeeds, 'roulette');
    })

  }


}
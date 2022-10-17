import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'other.component.html' })

export class OtherComponent implements OnInit {

  ballGames = [];
  virtualGames = [];
  funGames = [];
  otherGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds:Function
  ) { }




  ngOnInit() {
    this.componentName = 'Other';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.ballGames = this.getFeeds.getFeedsByCategory(allFeeds, 'ball');
      this.virtualGames = this.getFeeds.getFeedsByCategory(allFeeds, 'virtual');
      this.funGames = this.getFeeds.getFeedsByCategory(allFeeds, 'fun');
      this.otherGames = [...this.ballGames, ...this.virtualGames, ...this.funGames];
    })

  }

}
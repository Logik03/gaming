import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'newgames.component.html' })

export class NewGamesComponent implements OnInit {
  newGames = [];
  componentName: string;


  constructor(private feed: FeedService,
              private route: ActivatedRoute,
              private router: Router,
              private getFeeds: Function,) { }




  ngOnInit() {
    this.componentName = 'New'
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.newGames = this.getFeeds.getFeedsByCategory(allFeeds, 'new');
    })

  }

}
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'topgames.component.html' })
export class TopGamesComponent implements OnInit {
  
  topGames= [];
  componentName:string;
  
  constructor(private feed: FeedService,
              private route: ActivatedRoute,
              private router: Router,
              private getFeeds : Function,) {}
  
  
  
  
  ngOnInit(){
    this.componentName = 'Top';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.topGames = this.getFeeds.getFeedsByCategory(allFeeds, 'top');
    })

  }

}
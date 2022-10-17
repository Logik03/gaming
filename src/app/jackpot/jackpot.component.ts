import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'jackpot.component.html' })

export class JackPotComponent implements OnInit {

  jackpotFeeds = []

  jackpotGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds: Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Jackpot';
    this.feed.getJackpotFeeds().subscribe(data => {
      let feeds = data;
      this.jackpotFeeds = feeds.map(games => {
        return games.game;
      })
    })
    
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.jackpotGames = this.jackpotFeeds.map(id => allFeeds.find(item => item.id.includes(id)));
    })
    

  }





}
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'live.component.html' })

export class LiveComponent implements OnInit {

  liveGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function

  ) { }




  ngOnInit() {
    this.componentName = 'Live';
    this.store.select(selectGames).subscribe((games) => {
      let allFeeds = games;
      this.liveGames = this.getFeeds.getFeedsByCategory(allFeeds, 'live');
    })
  }

}
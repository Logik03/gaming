import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'poker.component.html' })

export class PokerComponent implements OnInit {

  pokerGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Poker';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.pokerGames = this.getFeeds.getFeedsByCategory(allFeeds, 'poker');
    })
  }

}
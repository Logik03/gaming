import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot} from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'blackjack.component.html' })

export class BlackjackComponent implements OnInit {

  blackjackGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function
  ) { }




  ngOnInit() {
    this.componentName = 'Blackjack';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.blackjackGames = this.getFeeds.getFeedsByCategory(allFeeds, 'blackjack');
    })

  }

}
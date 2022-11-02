import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'roulette.component.html' })

export class RouletteComponent implements OnInit {

  rouletteGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function
  ) { }




  ngOnInit() {
    this.componentName = 'Roulette';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.rouletteGames = this.getFeeds.getFeedsByCategory(allFeeds, 'roulette');
    })

  }


}
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGamesWithJackpots, getGamesWithJackpots } from '../store/gamejackpots/games-with-jackpots.selectors';
import { selectGames } from '../store/games/selectors';
import { selectJackpots } from '../store/jackpots/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';
import { Game, Jackpot } from '../interfaces';




@Component({ templateUrl: 'jackpot.component.html' })

export class JackPotComponent implements OnInit {

  jackpotGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function

  ) { }




  ngOnInit() {
    this.componentName = 'Jackpot';
    this.store.select(getGamesWithJackpots).subscribe((games) => {
      this.jackpotGames = games;
    }) 
  }

}
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';




@Component({ templateUrl: 'newgames.component.html' })

export class NewGamesComponent implements OnInit {
  newGames = [];
  componentName: string;


  constructor(private store: Store,private getFeeds: Function) { }




  ngOnInit() {
    this.componentName = 'New'
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.newGames = this.getFeeds.getFeedsByCategory(allFeeds, 'new');
    })

  }

}
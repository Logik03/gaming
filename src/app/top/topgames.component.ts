import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Function } from '../helpers';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';




@Component({ templateUrl: 'topgames.component.html' })
export class TopGamesComponent implements OnInit {
  
  topGames = [];
  componentName:string;
  
  constructor(private store: Store,
              private getFeeds : Function,) {}
  
  
  
  
  ngOnInit(){
    this.componentName = 'Top';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.topGames = this.getFeeds.getFeedsByCategory(allFeeds, 'top');
    })

  }

}
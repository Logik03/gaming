import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'slotgames.component.html' })

export class SlotGamesComponent implements OnInit {

  slotGames= [];
  componentName : string

  constructor(private store: Store, private getFeeds: Function
) { }




  ngOnInit() {
    this.componentName = 'Slot';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.slotGames = this.getFeeds.getFeedsByCategory(allFeeds, 'slots');
    })
  }

}
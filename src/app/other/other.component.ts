import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'other.component.html' })

export class OtherComponent implements OnInit {

  ballGames = [];
  virtualGames = [];
  funGames = [];
  otherGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function
  ) { }




  ngOnInit() {
    this.componentName = 'Other';
    this.store.select(mergeGamesJackpot).subscribe(data => {
      let allFeeds = data;
      this.ballGames = this.getFeeds.getFeedsByCategory(allFeeds, 'ball');
      this.virtualGames = this.getFeeds.getFeedsByCategory(allFeeds, 'virtual');
      this.funGames = this.getFeeds.getFeedsByCategory(allFeeds, 'fun');
      this.otherGames = [...this.ballGames, ...this.virtualGames, ...this.funGames];
    })

  }

}
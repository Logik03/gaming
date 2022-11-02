import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGames, mergeGamesJackpot } from '../store/games/selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'table.component.html' })

export class TableComponent implements OnInit {

  tableGames = [];
  componentName: string

  constructor(
    private store: Store, private getFeeds: Function
  ) { }




  ngOnInit() {
    this.componentName = 'Table';
    this.store.select(mergeGamesJackpot).subscribe((games) => {
      let allFeeds = games;
      this.tableGames = this.getFeeds.getFeedsByCategory(allFeeds, 'table');
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Function } from '../helpers';




@Component({ templateUrl: 'table.component.html' })

export class TableComponent implements OnInit {

  tableGames = [];
  componentName: string

  constructor(
    private feed: FeedService,
    private route: ActivatedRoute,
    private router: Router,
    private getFeeds: Function,
  ) { }




  ngOnInit() {
    this.componentName = 'Table';
    this.feed.getGameFeeds().subscribe(data => {
      let allFeeds = data;
      this.tableGames = this.getFeeds.getFeedsByCategory(allFeeds, 'table');
    })
  }

}
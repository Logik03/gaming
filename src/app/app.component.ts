import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getGames } from './store/games/action';
import { getJackpots, startPollingJackpots } from './store/jackpots/action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casino';

  constructor(private store: Store,) {

    this.store.dispatch(getGames());
    this.store.dispatch(getJackpots());
    this.store.dispatch(startPollingJackpots());
  }
}

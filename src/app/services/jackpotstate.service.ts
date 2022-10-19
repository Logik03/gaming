import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, forkJoin, interval } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { Game, GameJackpot, Jackpot } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class StateService {

  gameFeeds$;
  jackpotFeeds;

  private gamesJackpotsSource = new BehaviorSubject<GameJackpot[]>([]);
  gamesJackpots$ = this.gamesJackpotsSource.asObservable();

  constructor(
    private feed: FeedService,
    ) { }

  private next(games: GameJackpot[]): void {
    this.gamesJackpotsSource.next(games);
  }

  getGamesFromJackpot(games: GameJackpot[], jackpots: Jackpot[]): GameJackpot[] {
    return games.map(game => {
      const ownJackpot = jackpots.find(jackpot => jackpot.game === game.id);
      game.amount = ownJackpot?.amount;
      return game as GameJackpot;
    });
  }

  initState() {
    return forkJoin<[any]>([this.feed.getGameFeeds(), this.feed.getJackpotFeeds]).pipe(
      map((games: any, jackpots: any) => this.getGamesFromJackpot(games, jackpots)),
      tap(result => this.next(result))
     //map(([games, jackpots]: [Game[], Jackpot[]]) => this.getGamesFromJackpot(games, jackpots)),
      //tap(result => this.next(result))
    );
  }

  getJackpotUpdates(time: number): Observable<GameJackpot[]> {
    return interval(time).pipe(
      switchMap(() => this.feed.getJackpotFeeds()),
      withLatestFrom(this.gamesJackpots$),
      map(([jackpots, games]: [Jackpot[], GameJackpot[]]) => this.getGamesFromJackpot(games, jackpots)),
      tap((result) => this.next(result))
    );
  }
}
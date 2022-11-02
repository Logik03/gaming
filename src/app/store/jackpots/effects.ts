import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../services';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { EMPTY, interval } from 'rxjs';
import { invokeJackpotAPI, jackpotFetchAPISuccess, startPollingJackpots, getJackpots, loadJackpots } from '../jackpots/action';
import { selectJackpots } from '../jackpots/selectors';

@Injectable()
export class JackpotsEffects {

  constructor(
    private actions$: Actions,
    private game: FeedService,
    private store: Store
  ) { }

  loadAllJackpots$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeJackpotAPI),
      withLatestFrom(this.store.pipe(select(selectJackpots))),
      mergeMap(([, gamesfromstore]) => {
        if (gamesfromstore.length > 0) {
          return EMPTY;
        }
        return this.game
          .getJackpotFeeds()
          .pipe(map((data) => jackpotFetchAPISuccess({ allJackpot: data })));
      })
    )
  });

  pollingJackpots$ = createEffect(() => 
    this.actions$.pipe(
      ofType(startPollingJackpots),
      switchMap(() => interval(3000).pipe(map(invokeJackpotAPI)))
    )
  )}

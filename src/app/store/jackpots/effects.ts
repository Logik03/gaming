import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../services';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { EMPTY, interval, of } from 'rxjs';
import {  jackpotFetchAPISuccess, startPollingJackpots, getJackpots, loadJackpots, loadJackpotsFailed, } from '../jackpots/action';
import { selectJackpots } from '../jackpots/selectors';
import { Jackpot } from 'src/app/interfaces';

@Injectable()
export class JackpotsEffects {

  constructor(
    private actions$: Actions,
    private game: FeedService,
    private store: Store
  ) { }
 
  loadJackpots$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getJackpots),
      switchMap(() =>
        this.game.getJackpotFeeds().pipe(
        map((data: Jackpot[]) => loadJackpots({ allJackpot: data })),
        catchError(() => of(loadJackpotsFailed()))
        )
      )
    )
  });

  pollingJackpotsStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startPollingJackpots),
      switchMap(() => interval(3000).pipe(map(getJackpots)))
    )
  )

}

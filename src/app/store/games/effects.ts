import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../services';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { gamesFetchAPISuccess, getGames } from '../games/action';
import { selectGames } from '../games/selectors';

@Injectable()
export class GamesEffects {

  constructor(
    private actions$: Actions,
    private game: FeedService,
    private store: Store
  ) { }

  loadAllGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGames),
      withLatestFrom(this.store.pipe(select(selectGames))),
      mergeMap(([, gamesfromstore]) => {
        if (gamesfromstore.length > 0) {
          return EMPTY;
        }
        return this.game
          .getGameFeeds()
          .pipe(map((data) => gamesFetchAPISuccess({ allGames: data })));
      })
    )
  });
}
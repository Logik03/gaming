import { createAction, props } from '@ngrx/store';
import {Game} from '../../interfaces';

export const getGames = createAction('[Games] Fetch games api');
export const loadGames = createAction('[Games] Load games into store', props<{ allGames: Game[] }>());
export const loadGamesFailed = createAction('[Games] Load games failed');
export const gamesFetchAPISuccess = createAction('[Games API] Fetch API Success',props<{ allGames: Game[] }>());
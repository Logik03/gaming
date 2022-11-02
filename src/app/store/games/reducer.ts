import { Game } from '../../interfaces';
import { createReducer, on } from "@ngrx/store";
import { gamesFetchAPISuccess} from '../games/action';


export interface GamesState {
  games: Game[];
}

export const initialState: ReadonlyArray<Game> = [];



export const gameReducer = createReducer(
  initialState,
  on(gamesFetchAPISuccess, (state, { allGames }) => {
    return allGames;
  })
);
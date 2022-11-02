import { Jackpot } from '../../interfaces';
import { createReducer, on } from "@ngrx/store";
import { jackpotFetchAPISuccess, loadJackpots } from '../jackpots/action';


export interface JackpotsState {
  jackpots: Jackpot;
}

export const initialState: ReadonlyArray<Jackpot> = [];



export const jackpotReducer = createReducer(
  initialState,
  on(jackpotFetchAPISuccess, (state, { allJackpot }) => {
    return allJackpot;
  }),
  on(loadJackpots, (state,{ allJackpot }) => {
    return allJackpot;
   }), 
);
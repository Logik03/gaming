import { createAction, props } from '@ngrx/store';
import { Jackpot } from '../../interfaces';


export const invokeJackpotAPI = createAction('[JACKPOT API] Invoke Jackpot Fetch API');
export const loadJackpots = createAction('[Jackpots] Load jackpots into store', props<{ allJackpot: Jackpot[] }>());
export const jackpotFetchAPISuccess = createAction('[JACKPOT API] Fetch API Success',props<{ allJackpot: Jackpot[] }>());
export const loadJackpotsFailed = createAction('[Jackpots] Load jackpots failed');
export const startPollingJackpots = createAction('[Jackpots] Start polling jackpots');
export const getJackpots = createAction('[Jackpots] Fetch jackpots');
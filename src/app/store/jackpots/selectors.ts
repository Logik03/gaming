import { createFeatureSelector } from '@ngrx/store';
import { Jackpot } from '../../interfaces';

export const selectJackpots = createFeatureSelector<Jackpot[]>('jackpots');
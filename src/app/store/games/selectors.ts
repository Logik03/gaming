import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game, Jackpot } from '../../interfaces';
import { selectJackpots } from '../jackpots/selectors';

export const selectGames = createFeatureSelector<Game[]>('mygames');
export const mergeGamesJackpot = createSelector(
  selectGames,
  selectJackpots,
  (games: Game[], jackpots: Jackpot[]) => {
    const mergedArray = games.map((item) => {
      const isExist = jackpots.find((itemInFirst) => itemInFirst.game == item.id);
      return { ...item, amount: isExist ? isExist.amount : '', };
    });
    return mergedArray;
  }
)
import { createSelector } from '@ngrx/store';
import { Game, GameJackpot, Jackpot, } from '../../interfaces';
import { selectGames } from '../games/selectors';
import { selectJackpots } from '../jackpots/selectors';


export const selectGamesWithJackpots = createSelector(
  selectGames,
  selectJackpots,
  (games: Game[], jackpots: Jackpot[]) => {
    return games.filter((game: Game) => jackpots.map(games => games.game).find(item => game.id.includes(item)))
  }
);

export const getGamesWithJackpots = createSelector(
  selectGamesWithJackpots,
  selectJackpots,
  (games:Game[], jackpots: Jackpot[]) => {
    const expArray = games.map((item) => {
      const exist = jackpots.find((itemInFirst) => itemInFirst.game == item.id);
      return { ...item, amount: exist.amount, game: exist.game };
    });
    return expArray;
  }
)

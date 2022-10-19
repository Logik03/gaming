import { Game } from './gamefeed';
import { Jackpot } from './jackpotfeed';

export interface GameJackpot extends Game, Partial<Jackpot> { }
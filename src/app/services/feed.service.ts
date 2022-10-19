import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, Jackpot } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  GAME_FEED = "http://stage.whgstage.com/front-end-test/games.php ";

  JACKPOT_FEED = "http://stage.whgstage.com/front-end-test/jackpots.php";

  constructor(private http: HttpClient) { }

  getGameFeeds (): Observable<Game[]> {
    return this.http.get<Game[]>(this.GAME_FEED);
  }

  getJackpotFeeds(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(this.JACKPOT_FEED);
  }
  
}
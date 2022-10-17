import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  GAME_FEED = "http://stage.whgstage.com/front-end-test/games.php ";

  JACKPOT_FEED = "http://stage.whgstage.com/front-end-test/jackpots.php";

  constructor(private http: HttpClient) { }

  getGameFeeds () {
    return this.http.get<any>(this.GAME_FEED);
  }

  getJackpotFeeds() {
    return this.http.get<any>(this.JACKPOT_FEED);
  }
  
}
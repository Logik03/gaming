import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Function {
  
  getFeedsByCategory(allFeeds: any[], category: string) {
    return allFeeds.filter(feeds => feeds.categories.some(item => item.includes(category)));
  }


}



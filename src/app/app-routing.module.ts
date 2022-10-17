import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from './top';
import { NewGamesComponent } from './new';
import { SlotGamesComponent } from './slot';
import { JackPotComponent } from './jackpot';
import { LiveComponent } from './live';
import { BlackjackComponent } from './blackjack';
import { RouletteComponent } from './roulette';
import { TableComponent } from './table';
import { PokerComponent } from './poker';
import { OtherComponent } from './other';

const routes: Routes = [
  {
    path: '',
    component: TopGamesComponent,
  },
  {
    path: 'top',
    component: TopGamesComponent,
  },
  {
    path: 'new',
    component: NewGamesComponent,
  },
  {
    path: 'slot',
    component: SlotGamesComponent,
  },
  {
    path: 'jackpot',
    component: JackPotComponent,
  },
  {
    path: 'live',
    component: LiveComponent,
  },
  {
    path: 'blackjack',
    component: BlackjackComponent,
  },
  {
    path: 'roulette',
    component: RouletteComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'poker',
    component: PokerComponent,
  },
  {
    path: 'other',
    component: OtherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

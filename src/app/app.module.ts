import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentComponent } from './Components/card-component/card-component.component';
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
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './store/games/effects';
import { JackpotsEffects } from './store/jackpots/effects';
import { gameReducer } from './store/games/reducer';
import { jackpotReducer } from './store/jackpots/reducer';


//import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponentComponent,
    TopGamesComponent,
    NewGamesComponent,
    SlotGamesComponent,
    JackPotComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    //FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([GamesEffects, JackpotsEffects]),
    StoreModule.forFeature('mygames', gameReducer), StoreModule.forFeature('jackpots', jackpotReducer)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

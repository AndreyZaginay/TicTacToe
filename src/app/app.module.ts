import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TicTacToeModule } from './tic-tac-toe/tic-tac-toe.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicTacToeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

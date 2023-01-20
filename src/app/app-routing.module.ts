import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'TicTacToe',
    component: TicTacToeComponent
  },
  {
    path: '',
    redirectTo: 'TicTacToe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

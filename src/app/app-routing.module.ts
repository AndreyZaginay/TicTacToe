import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

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

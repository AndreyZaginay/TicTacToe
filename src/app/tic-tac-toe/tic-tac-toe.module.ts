import { TicTacToeComponent } from './tic-tac-toe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TicTacToeComponent 
  }
]

@NgModule({
  declarations: [TicTacToeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TicTacToeModule { }

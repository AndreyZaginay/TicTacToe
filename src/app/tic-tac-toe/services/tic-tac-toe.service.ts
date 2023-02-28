import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { TicTacToe } from './../models/models';

const DEFAULT_STATE: TicTacToe = {
  p1Score: 0,
  p2Score: 0,
  p1Steps: [],
  p2Steps: [],
  fields: [],
  outputMsg: ''
}

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  state!: TicTacToe;
  private readonly state$: BehaviorSubject<TicTacToe>;
  private toggle: boolean = true;
  private isWin: boolean = false;
  private readonly winningCombinations: number[][] = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8]
  ];


  get select$(): Observable<TicTacToe> {
    return this.state$.pipe(
      tap((state: TicTacToe) => this.state = state)
    )
  }
  constructor() {
    this.state$ = new BehaviorSubject<TicTacToe>(DEFAULT_STATE);
   }

  step(field: HTMLElement, value: number): void {
    if (this.state.fields.includes(field) || this.isWin) {
      return
    }
    this.patchState({fields: [...this.state.fields, field]});
    if (this.toggle) {
      this.stepPlayer1(field, value);
    } else {
      this.stepPlayer2(field, value);
    }
    this.checkWinner();
  }

  stepPlayer1(field: HTMLElement, value: number): void {    
    if(field.textContent) {
      return
    }
    field.textContent = 'x';
    this.patchState({p1Steps: [...this.state.p1Steps, value]});
    this.changeToggle(); 
  }
  stepPlayer2(field: HTMLElement, value: number): void {
    if(field.textContent) {
      return
    }
    field.textContent = 'o';
    this.patchState({p2Steps: [...this.state.p2Steps, value]});
    this.changeToggle();
  }

  checkWinner(): void {
     this.winningCombinations.find((item) => {
      if (item.filter((i) => this.state.p1Steps.includes(i)).length === 3) {
        this.patchState({p1Score: this.state.p1Score + 1, outputMsg: this.state.outputMsg = 'Player 1 won'});
        this.win();
      }
      if(item.filter((i) => this.state.p2Steps.includes(i)).length === 3) {
        this.patchState({p2Score: this.state.p2Score + 1, outputMsg: this.state.outputMsg = 'Player 2 won'});
        this.win();
      }
     })
  }

  reset(): void {
    this.state.fields.forEach(field => field.textContent = null);
    this.patchState({  p1Steps: [], p2Steps: [], outputMsg: '', fields: []});
    this.isWin = false;
    this.toggle = true;
  }

  win(): void {
    this.isWin = !this.isWin;
  }

  private changeToggle(): void {
    this.toggle = !this.toggle;
  }

  private patchState(payload: Partial<TicTacToe>): void {
    this.state$.next({...this.state, ...payload});
  }
}

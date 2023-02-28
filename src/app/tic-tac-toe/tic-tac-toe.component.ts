import { takeUntil, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { TicTacToe } from './models/models';
import { TicTacToeService } from './services/tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  private readonly destroy$: Subject<void> = new Subject<void>();
  fields: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  state!: TicTacToe;

  constructor(private readonly ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {  
    this.ticTacToeService.select$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((state) => this.state = state)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  step(field: HTMLElement, value: number): void {
    this.ticTacToeService.step(field, value);
  }

  reset(): void {    
    this.ticTacToeService.reset();
  }

}

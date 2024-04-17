import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  // Arguments
  @Output() intervalFire = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  // Constructor

  // Methods
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}

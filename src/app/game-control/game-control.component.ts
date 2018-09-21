import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    counter = 0;
    intervalHolder;
    @Output() startingGame = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    startGame = () => {
        this.intervalHolder = setInterval(() => {
            this.counter++;
            this.startingGame.emit(this.counter);
        }, 1000);
    }

    pauseGame = () => {
        clearInterval(this.intervalHolder);
    }

}

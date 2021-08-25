import View from './view.js';

export default class Model {
    constructor() {
        //Chronometer
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;

        //Internal variables
        this.startTime = 0;
        this.end = 0;
        this.diff = 0;
        this.timerID = 0;
        this.view = null;

        //Start-Stop variables
        this.pause = 0;
        this.release = 0;
        this.pauseOffset = 0;
    }

    setView(view) {
        this.view = view;
        this.view.update();
    }

    chrono() {
        this.end = new Date();
        this.diff = this.end - this.startTime;
        this.diff -= this.pauseOffset;
        this.diff = new Date(this.diff);

        this.miliseconds = this.diff.getMilliseconds();
        this.seconds = this.diff.getSeconds();
        this.minutes = this.diff.getMinutes();
        this.hours = this.diff.getHours()-1;
        
        this.view.update();
        this.timerID = setTimeout(() => this.chrono(), 10);
    }

    startRunning() {
        if(this.startTime === 0) {
            this.startTime = new Date();
        } else {
            this.release = performance.now();
            this.pauseOffset += (this.release - this.pause);
        }
        this.chrono();
    }

    resetRunning() {
        this.startTime = 0;
        this.pauseOffset = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;
        this.view.update();
    }

    stopRunning() {
        this.pause = performance.now();
        clearTimeout(this.timerID);
    }
}
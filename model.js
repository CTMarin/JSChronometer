import View from './view.js';

export default class Model {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;

        this.startTime = 0;
        this.end = 0;
        this.diff = 0;
        this.timerID = 0;
        this.view = null;
    }

    setView(view) {
        this.view = view;
        this.view.update();
    }

    chrono() {
        this.end = new Date();
        this.diff = this.end - this.startTime;
        this.diff = new Date(this.diff);

        this.miliseconds = this.diff.getMilliseconds();
        this.seconds = this.diff.getSeconds();
        this.minutes = this.diff.getMinutes();
        this.hours = this.diff.getHours()-1;
        
        this.view.update();
        this.timerID = setTimeout(() => this.chrono(), 10);
    }

    startRunning() {
        this.startTime = new Date();
        this.chrono();
    }

    stopRunning() {
        clearInterval(this.timerID);
    }
}
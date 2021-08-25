import Reset from './components/reset.js';
import Save from './components/save.js';
import Start from './components/start.js';
import Stop from './components/stop.js';
import Model from './model.js';

export default class View {
    constructor() {
        this.model = null;
        this.start = new Start();
        this.stop = new Stop();
        this.reset = new Reset();
        this.save = new Save();
        this.currentTime = 0;

        this.stop.btn.style.display = "none";
        this.reset.btn.style.display = "none";
        this.save.btn.style.display = "none";
    }

    setModel(model) {
        this.model = model;
        
        this.start.onClick(() => this.model.startRunning());
        this.stop.onClick(() => this.model.stopRunning());
        this.reset.onClick(() => this.model.resetRunning());
    }

    update() {
        this.currentTime = this.model.diff;
        document.getElementById('timer').innerHTML = 
            (this.model.hours).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ':' +
            (this.model.minutes).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
            (this.model.seconds).toLocaleString(undefined, {minimumIntegerDigits: 2}) + '.' +
            (this.model.miliseconds).toLocaleString(undefined, {minimumIntegerDigits: 3});
    }
}
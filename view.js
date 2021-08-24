import Start from './components/start.js';
import Stop from './components/stop.js';
import Model from './model.js';

export default class View {
    constructor() {
        this.model = null;
        this.start = new Start();
        this.stop = new Stop();
    }

    setModel(model) {
        this.model = model;
        
        this.start.onClick(() => this.model.startRunning());
        this.stop.onClick(() => this.model.stopRunning());
    }

    update() {
        document.getElementById('timer').innerHTML = 
            (this.model.hours).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ':' +
            (this.model.minutes).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
            (this.model.seconds).toLocaleString(undefined, {minimumIntegerDigits: 2}) + '.' +
            (this.model.miliseconds).toLocaleString(undefined, {minimumIntegerDigits: 3});
    }
}
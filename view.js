import Reset from './components/reset.js';
import Save from './components/save.js';
import Start from './components/start.js';
import Stop from './components/stop.js';
import Model from './model.js';

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('results');
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
        this.save.onClick(() => this.model.saveCurrentTime());
    }

    render() {
        const results = this.model.getResults();
        results.forEach((result) => this.createRow(result));
    }

    update() {
        this.currentTime = this.model.diff;
        document.getElementById('timer').innerHTML = 
            (this.model.hours).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ':' +
            (this.model.minutes).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
            (this.model.seconds).toLocaleString(undefined, {minimumIntegerDigits: 2}) + '.' +
            (this.model.miliseconds).toLocaleString(undefined, {minimumIntegerDigits: 3});
    }

    saveTime() {
        const time =         
            (this.model.hours).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ':' +
            (this.model.minutes).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
            (this.model.seconds).toLocaleString(undefined, {minimumIntegerDigits: 2}) + '.' +
            (this.model.miliseconds).toLocaleString(undefined, {minimumIntegerDigits: 3});;
        const result = this.model.addResult(time);
        this.createRow(result);
    }

    createRow(result) {
        const row = this.table.insertRow();
        row.setAttribute('id', result.id);
        row.innerHTML = `
            <td style="position: relative; left: 0%;">${result.id}</td>
            <td style="position: relative; left: 25%;">${result.time}</td>
            <td style="position: relative; left: 25%;"></td>
        `

        const delBtn = document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
        delBtn.onclick = () => this.removeRow(result.id);
        row.children[2].appendChild(delBtn);
    }

    removeRow(id) {
        this.model.deleteResult(id);
        document.getElementById(id).remove();
    }
}
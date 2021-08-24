export default class Start {
    constructor() {
        this.btn = document.getElementById('start');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            callback();
        }
    }
}
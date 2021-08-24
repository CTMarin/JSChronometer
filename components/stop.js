export default class Stop {
    constructor() {
        this.btn = document.getElementById('stop');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            callback();
        }
    }
}
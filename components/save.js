export default class Save {
    constructor() {
        this.btn = document.getElementById('save');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            callback();
        }
    }
}
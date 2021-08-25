export default class delResult {
    constructor() {
        this.btn = document.getElementById('delete');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            callback();
        }
    }
}
export default class Reset {
    constructor() {
        this.btn = document.getElementById('reset');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            document.getElementById("start").style.display = "none";
            document.getElementById("stop").style.removeProperty("display");
            this.btn.style.display = "none";
            callback();
        }
    }
}
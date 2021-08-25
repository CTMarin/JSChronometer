export default class Stop {
    constructor() {
        this.btn = document.getElementById('stop');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            document.getElementById("start").style.removeProperty("display");
            document.getElementById("reset").style.removeProperty("display");
            document.getElementById("save").style.display = "none";
            this.btn.style.display = "none";
            callback();
        }
    }
}
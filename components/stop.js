export default class Stop {
    constructor() {
        this.btn = document.getElementById('stop');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            document.getElementById("start").style.removeProperty("display");
            document.getElementById("start").innerText = "Cont";
            document.getElementById("reset").style.removeProperty("display");
            this.btn.style.display = "none";
            callback();
        }
    }
}
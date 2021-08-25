export default class Start {
    constructor() {
        this.btn = document.getElementById('start');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            document.getElementById("stop").style.removeProperty("display");
            document.getElementById("save").style.removeProperty("display");
            document.getElementById("reset").style.display = "none";
            this.btn.style.display = "none";
            callback();
        }
    }
}
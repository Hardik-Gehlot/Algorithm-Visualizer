export function resetBars() {
    var bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "orange";
    }
}
export function getIsRunning(){
    const val = document.getElementById("isRunning");
    return val.textContent === "true";
}
export function setIsRunning(val){
    const div = document.getElementById("isRunning");
    div.textContent = val;
}
function getSpeed(){
    return document.getElementById("speedSlider").value;
}
export function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, getSpeed() * 100);
    });
}
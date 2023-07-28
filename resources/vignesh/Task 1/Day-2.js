var count = 0;

document.getElementById("value").innerText = count;

function increase() {
    count = count + 1;
    document.getElementById("value").innerText = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("value").innerText = count;
}
function reset() {
    count=0;
    document.getElementById("value").innerText = count;
}
var rea = 7
console.log(rea);

window.onload = function start() {
    loop();
}

function loop() {
    window.setInterval(function() {
        document.getElementById("ticker").innerHTML = rea
        rea++;
    }, 0)
}
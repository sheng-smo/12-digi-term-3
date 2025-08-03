var rea = 7
console.log(rea);

window.onload = function start() {
    loop();
}

function loop() {
    window.setInterval(function() {
        document.getElementById("title").style.transform = "translate3d(-50%, 20vw, -10px) rotate3d(0, 1, 0, "+rea+"deg)";
        // document.getElementById("ticker").innerHTML = rea;
        rea++;
    }, 0)
}
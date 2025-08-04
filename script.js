var rea = 7
// console.log(rea);

window.onload = function start() {
    loop();
}

var change = [1,1,1]

function loop() {
    window.setInterval(function() {
        document.getElementById("title").style.transform = "translate3d(-50%, 20vw, 0px) scale(10) rotate3d(1, 1, 1, "+rea+"deg) scale(0.1)";
        // document.getElementById("ticker").innerHTML = rea;
        rea++;
        // const thing = document.getElementsByClassName("parallax")
        // console.log(change)
    }, 0)
}
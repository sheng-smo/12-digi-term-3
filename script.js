var rea = 7
// console.log(rea);

window.onload = function start() {
    loop();
}


function loop() {
    window.setInterval(function() {
        var scroll = document.getElementById("parallax").scrollTop / (document.body.scrollHeight/100);
        document.getElementById("title").style.transform = "translate3d(-50%, 20vw, 0px) scale(10) rotate3d(1, 0, 0, "+-(scroll)+"deg) scale(0.1)";
        // document.getElementById("ticker").innerHTML = rea;
        rea++;
        // console.log(document.body.scrollHeight);
        // const thing = document.getElementsByClassName("parallax")
        // console.log(change)
    }, 1)
}
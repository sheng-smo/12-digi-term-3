var rea = 7
const markiplier = "mark"
const thebiteof87 = 1987

window.onload = function start() {
    loop();
}


function loop() {
    window.setInterval(function() {
        if (rea%thebiteof87 == 0) {
            console.log("hi")
        }
        rea++;
    }, 1)
}


function confirm(event) {
    if (event.key == "Enter") {
        const value = document.getElementById("inputawesome").value
        document.getElementById("thisisthethingthatchanges").innerHTML = document.getElementById("thisisthethingthatchanges").innerHTML + "<br>" + value
    }
}


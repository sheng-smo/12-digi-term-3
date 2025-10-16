var rea = 7
const markiplier = "mark"
const thebiteof87 = 1987

window.onload = function start() {
    changeMap();
    // loop();
}


// function loop() {
//     window.setInterval(function() {
//         if (rea%thebiteof87 == 0) {
//             console.log("hi")
//         }
//         rea++;
//     }, 1)
// }


function confirm(event) {
    if (event.key == "Enter") {
        const value = document.getElementById("inputawesome").value
        document.getElementById("thisisthethingthatchanges").innerHTML = document.getElementById("thisisthethingthatchanges").innerHTML + "<br>" + value
    }
}

var value1 = document.getElementById("maps").value
function changeMap(){
    value1 = document.getElementById("maps").value;
    document.querySelectorAll('.mapdetail').forEach(element => { // damned lambdas come back to haunt me
        element.style.visibility = 'hidden'
    })
    if(value1=="4"){
        document.getElementById("map").src="asset/bases/season 4/villager.png";
        document.querySelectorAll('.stuffs4').forEach(element => {
            element.style.visibility = 'visible'
        })
    }
    if(value1=="5"){
        document.getElementById("map").src="asset/bases/season 5/banner.png";
    }
    if(value1=="6"){
        document.getElementById("map").src="asset/bases/season 6/10-09-2025,utah.png";
    }
    if(value1=="7"){
        document.getElementById("map").src="asset/bases/season 7/isladehatsunemiku.png";
    }
}
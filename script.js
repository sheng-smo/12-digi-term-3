var rea = 7
const markiplier = "mark"
const thebiteof87 = 1987

// window.onload = function start() {
//     loop();
// }


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
    console.log(value1);;
    if(value1=="4"){
        document.getElementById("map").src="asset/bases/season 4/villager.png";
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
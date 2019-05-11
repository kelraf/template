
function navigation() {
    var x = document.getElementById("nav");

    if (x.className === "nav-list") {
        x.className += " resp";
    } else {
        x.className = "nav-list";
    }
}

function refresher() {
    var refresh = 1000; //refresh after 1s

    time = setTimeout('myTime()', refresh);
}

function myTime() {
    var x = new Date();

    var hours = x.getHours(), minutes = x.getMinutes(), seconds = x.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    refresher();
}

function getit() {
    var x = document.getElementById("id").innerHTML = "";
    // alert(x)
}
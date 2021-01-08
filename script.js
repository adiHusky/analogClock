const HOURHAND = document.querySelector("#hour");
console.log(HOURHAND);
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


 let hrPosition = (hr*30) + (min*30/60);
 let minPosition = (min*6) + (sec*6/60);
 let secPosition = (sec*6);


function runTheClock(){




console.log(date);

  hrPosition = hrPosition + 30/3600;
 minPosition = minPosition + 360/3600;
 secPosition = secPosition + 6;

// let hrPosition = (hr*360/12)+(min*(360/60)/12);
// let minPosition = (min*360/60)+(sec*(360/60)/60);
// let secPosition = sec*360/60;


HOURHAND.style.transform = "rotate(" + hrPosition + "deg";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg";
}

var interval = setInterval(runTheClock, 1000);


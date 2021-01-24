const clock = document.querySelector(".js-clock");
const clockTitle= clock.querySelector("h1");


function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hou = date.getHours();
    clockTitle.innerText=`${hou<10 ? `0${hou}`:hou}:${min <10 ? `0${min}` : min}`;
}


function init(){
    
    getTime();
    setInterval(getTime,1000);
}
init();
const body = document.querySelector("body");
const IMG_NUM=3;

function handleImageLoad(){
    console.log("finished");
}


function paintImage(imgnum){
    const image = new Image();
    image.src =`img/${imgnum+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}   

function getRandom(){
    const number=Math.floor(Math.random()*IMG_NUM);
    return number;
}
function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();
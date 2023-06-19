var image = document.getElementById("image");
var animationStep = 0;
var direction = 1; // 1 for forward, -1 for backward
var animationPx = [164, 332, 500, 668, 836, 1004, 1172, 1340];
var tankPosition = 0;

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)";

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
                console.log("left arrow");
        if (direction == 1) {
            image.style.transform = "rotate(270deg)";
        }
        direction = -1;
        moveTank();
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        if (direction == -1) {
            image.style.transform = "rotate(90deg)";
        }
        direction = 1;
        moveTank();
    }
}


function moveTank() {
    animationStep += direction;
    if (animationStep >= animationPx.length) {
        animationStep = 0;
    } else if (animationStep < 0) {
        animationStep = animationPx.length - 1;
    }
    image.style.backgroundPosition = `${animationPx[animationStep]}px 0px`;
    tankPosition += direction * 10;
    image.style.left = `${tankPosition}px`;
}
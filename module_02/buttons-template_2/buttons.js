function changeBackgroundAndImage() {
    if (button1.innerHTML == 0 && button2.innerHTML == 0 && button3.innerHTML == 0) {
        image.src = "images/bg0.jpg";
        image1.src = "images/0.jpg";
    } else if (button1.innerHTML == 1 && button2.innerHTML == 1 && button3.innerHTML == 1) {
        image.src = "images/bg3.jpg";
        image1.src = "images/3.jpg";
    } else if (button1.innerHTML == 1 && button2.innerHTML == 1 || button1.innerHTML == 1 && button3.innerHTML == 1 || button2.innerHTML == 1 && button3.innerHTML == 1) {
        image.src = "images/bg2.jpg";
        image1.src = "images/2.jpg";
    } else {
        image.src = "images/bg1.jpg";
        image1.src = "images/1.jpg";
    }
}

function increaseValue(button) {
    if(button.style.backgroundColor == "red") return; // return if button is already pressed
    var value = parseInt(button.innerHTML);
    if (value == 1) {
        value--;
    } else {
        value++;
    }
    button.innerHTML = value;
    button.style.backgroundColor = "red"; // set background color to red when button is pressed
    changeBackgroundAndImage();
}

button1.addEventListener("click", function() {
    increaseValue(button1);
    button2.style.backgroundColor = ""; // enable button 1 and 3
    button3.style.backgroundColor = "";
});

button2.addEventListener("click", function() {
    increaseValue(button2);
    button1.style.backgroundColor = ""; // enable button 2 and 3
    button3.style.backgroundColor = "";
});

button3.addEventListener("click", function() {
    increaseValue(button3);
    button1.style.backgroundColor = ""; // enable button 1 and 2
    button2.style.backgroundColor = "";
});
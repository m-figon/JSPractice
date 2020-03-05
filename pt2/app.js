function changeImg() {
    var object = document.querySelector('#babyJodaImg');
    object.style.height = "20%";
    object.style.width = "35%";
}
function changeColor() {
    var object = document.querySelector('.container');
    object.querySelector('h1').textContent = "hello fr0m bby joda";
    object.style.color = "red";
}
function changeColor2() {
    var object = document.querySelector('.container');
    object.querySelector('h1').textContent = "bye fr0m bby joda";
    object.style.color = "green";
}
function checkIfBox() {
    if (document.forms['data']['firstBox'].checked === true) {
        document.querySelector('#babyJodaImg').style.visibility = 'visible';
    } else {
        document.querySelector('#babyJodaImg').style.visibility = 'hidden';
    }
}
function createSign() {
    var h1 = document.createElement('h1');
    h1.textContent = "Hello from bby Joda!";
    h1.addEventListener("mouseover", changeColor, false);
    h1.addEventListener("mouseout", changeColor2, false);
    document.querySelector(".container").appendChild(h1);

}
function mousePos(e) {

    var mouseX = e.pageX;
    var mouseY = e.pageY;
    document.forms['data']['mousepositionx'].value = mouseX;
    document.forms['data']['mousepositiony'].value = mouseY;
}
function mouseClick(e) {
    
    key = e.which;
    switch (key) {
        case 1: key = "Left";
            break;
        case 2: key = "Middle";
            break;
        case 3: key = "Right";
            break;
        default: break;
    }
    document.forms['data']['mousebutton'].value = key;
}
(function () {
    document.onmousemove = mousePos;
    document.onmousedown = mouseClick;
})()

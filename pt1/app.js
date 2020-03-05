function ageInDays() {
    var age = prompt("Please give me information about your age");
    //console.log(age);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + age);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://66.media.tumblr.com/60157b543fd17cd16a5d35388a008edd/tumblr_nf0stwar8w1tvgytqo1_500.gif";
    div.appendChild(image);
}
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
function reaction(object,number) {
    if (number === 0) {
        console.log(object + " and rock");
    } else if (number === 1) {
        console.log(object + " and paper");
    } else if (number === 2) {
        console.log(object + " and scissors");
    } else {
       console.log("error");
    }
}
function whoWon(object, number) {
    if (object === 'rock'){
        if (number === 0) {
            document.getElementById(object).setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA_pNWzkiGnXx63s0vWgAHUZgVivf1_JPReWY6DL9aooB7gw2e");
        }else if (number === 1) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-vector/you-lose-red-rubber-stamp-260nw-244769227.jpg");
        } else if (number === 2) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-illustration/youve-won-rubber-stamp-over-260nw-158040608.jpg");
        } else {
            console.log("error");
        }
    }else if (object === 'paper') {
        if (number === 0) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-illustration/youve-won-rubber-stamp-over-260nw-158040608.jpg");       
        }else if (number === 1) {
            document.getElementById(object).setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA_pNWzkiGnXx63s0vWgAHUZgVivf1_JPReWY6DL9aooB7gw2e");
        } else if (number === 2) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-vector/you-lose-red-rubber-stamp-260nw-244769227.jpg");
        } else {
            console.log("error");
        }
    }else if (object === 'scissors') {
        if (number === 0) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-vector/you-lose-red-rubber-stamp-260nw-244769227.jpg");
        } else if (number === 1) {
            document.getElementById(object).setAttribute("src", "https://image.shutterstock.com/image-illustration/youve-won-rubber-stamp-over-260nw-158040608.jpg");       
        } else if (number === 2) {
            document.getElementById(object).setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA_pNWzkiGnXx63s0vWgAHUZgVivf1_JPReWY6DL9aooB7gw2e");
        } else {
            console.log("error");
        }
    }
}
function rpsGame(yourChoice) {
    var randomNumber = randomInt(0, 3);
    reaction(yourChoice.getAttribute('id'), randomNumber);
    whoWon(yourChoice.getAttribute('id'), randomNumber);
}
function getFirstImageValue(object) {
    if (object.getAttribute("id") === 'rock') {
        object.setAttribute("src", "https://image.shutterstock.com/image-vector/family-gathering-cartoon-vector-rocks-260nw-173317940.jpg");
    } else if (object.getAttribute("id") === 'paper') {
       object.setAttribute("src", "https://image.shutterstock.com/image-vector/papers-cartoon-vector-illustration-black-260nw-547625740.jpg");
    } else if (object.getAttribute("id") === 'scissors') {
       object.setAttribute("src", "https://previews.123rf.com/images/mikailain/mikailain1809/mikailain180900232/109061230-scissors-cartoon-bw.jpg");
    }
}
function init(num) {
    var ids = new Array('rock', 'paper', 'scissors');
    document.getElementById(ids[num]).onmouseleave = function () {
        getFirstImageValue(document.getElementById(ids[num]));
    }
}
function dataSbm() {
    let name = (document.forms['data']['fname'].value);
    let surname = (document.forms['data']['lname'].value);
    let sex = (document.forms['data']['gender'].value);
    var h2 = document.createElement('h2');
    document.querySelector('.container-5').appendChild(h2);
    var text = document.createTextNode(name +" " + surname +" " + sex);
    h2.appendChild(text);
}
(function () {
    for (var i = 0; i < 3; i++) {
        init(i);
    }
    
})();



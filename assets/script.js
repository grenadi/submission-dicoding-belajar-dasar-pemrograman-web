function merah1() {
    document.getElementById("nav1").style.color = "red";
}

function merah2() {
    document.getElementById("nav2").style.color = "red";
}

function merah3() {
    document.getElementById("nav3").style.color = "red";
}

function putih1() {
    document.getElementById("nav1").style.color = "white";
}

function putih2() {
    document.getElementById("nav2").style.color = "white";
}

function putih3() {
    document.getElementById("nav3").style.color = "white";
}

let tema = "white";

const logo = document.getElementById("logo")
logo.addEventListener("click", function () {

    let result = "";
    switch (tema) {
        case "black":
            whiteTheme();
            result = "white";
            break
        case "white":
            darkTheme();
            result = "black";
            break
        default:
            break
    }
    //console.log(result);
    tema = result;
})

const darkTheme = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('footer').style.backgroundColor = "white";
    document.getElementById('footer').style.color = "black";
}

const whiteTheme = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('footer').style.backgroundColor = "black";
    document.getElementById('footer').style.color = "white";
}
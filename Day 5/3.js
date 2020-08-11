

function on() {
    let newchange = document.querySelector("div").children[0];

    newchange.style.background = "red";
    newchange.style.color = "white";

    newchange.innerHTML = "Sanam";
}

function out() {
    let newchange = document.querySelector("div").children[0];

    newchange.style.background = "green";
    newchange.style.color = "white";

    newchange.innerHTML = "My name";
}
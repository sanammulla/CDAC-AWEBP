

function handleMouseOver(){
    let ok = document.querySelector("#change");
    ok.style.background = "pink";
    ok.style.color = "white";
    ok.innerHTML = "Sanam";
}


function handleMouseOut(){
    let ok = document.querySelector("#change");
    ok.style.background = "black";
    ok.style.color = "white";
    ok.innerHTML = "my name is -";
}

let count = 1;
let ccount = 1;

function newlike(){
    count++;
    document.querySelector("#like").innerHTML = "Like "+ count;
}

function newcomment(){
    let newcomment = document.createElement("div");
    newcomment.textContent = "comment... " +ccount;

    let newc = document.querySelector("#Box");
    newc.appendChild(newcomment);
    ccount++;
}
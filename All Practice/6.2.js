let count = 1;


function newlike(){
    count++;
    document.querySelector("#like").innerHTML = "Like "+ count;
}

function newcomment(){
    let ncomment = document.querySelector("#input").value;

    let newcomment = document.createElement("div");
    newcomment.textContent = ncomment;

    let newc = document.querySelector("#Box");
    newc.appendChild(newcomment);
    
    document.querySelector("#input").value = "";
}



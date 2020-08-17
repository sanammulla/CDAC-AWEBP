let count = 1;


function newlike(){
    count++;
    document.querySelector("#like").innerHTML = "Like "+ count;
}

function newcomment(){
    let ncomment = document.querySelector("#input").value;

    let newcomment = document.createElement("div");
    newcomment.style.display = "flex";
    newcomment.style.justifyContent = "space-between";
    newcomment.style.background = "orange";
    newcomment.style.marginBottom = "8px";

    let child1 = document.createElement("div");
    child1.textContent= ncomment;
    
    let child2 = document.createElement("button")
    child2.textContent = "Delete";

    newcomment.appendChild(child1);
    newcomment.appendChild(child2);

    let newc = document.querySelector("#Box");
    newc.insertBefore(newcomment, Box.firstChild);
    
    document.querySelector("#input").value = "";
}



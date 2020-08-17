let count = 1;


function newlike(){
    count++;
    document.querySelector("#like").innerHTML = "Like "+ count;
}


function newcomment(){
    let newcomment = document.querySelector("#input").value;

    let newdiv = document.querySelector("#crow").cloneNode(true);
    newdiv.removeAttribute("id");
    newdiv.style.visibility="visible";
    newdiv.children[0].innerHTML=newcomment;
    
    let commentBox = document.querySelector("#Box");
    commentBox.insertBefore(newdiv,commentBox.firstChild);

    document.querySelector("#input").value="";
}

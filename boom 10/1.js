let counter = 1;
let likecount =1 ;

function likeHere(){
    likecount++;
    document.querySelector("#like").innerHTML= "Like "+likecount;
}

function commentHere(){
    let newElement = document.createElement("div");
    newElement.textContent= "comment "+ counter;

    let commentBox = document.querySelector("#commentBox");
    commentBox.appendChild(newElement);

    counter++;
}

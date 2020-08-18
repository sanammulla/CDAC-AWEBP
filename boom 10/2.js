
let likecount =1 ;

function likeHere(){
    likecount++;
    document.querySelector("#like").innerHTML= "Like "+likecount;
}

function commentHere(){
    let userComment = document.querySelector("#input").value;

    let smallBox = document.createElement("div");

    smallBox.textContent = userComment;

    let commentS = document.querySelector("#commentBox");
    
    commentS.insertBefore(smallBox, commentS.firstChild);

    document.querySelector("#input").value = "";

}


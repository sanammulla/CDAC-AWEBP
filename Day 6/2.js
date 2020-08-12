let likecount = 1;
var counter = 1;

function likehere() {
  likecount++;
  document.querySelector("#like").innerHTML="Like "+ likecount;
}


function commentHere() {
  let UserComment = document.querySelector("#cment").value;
  
  let newElement = document.createElement("div");

  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.marginBottom = "8px";

    const child1=document.createElement("div");
    child1.textContent=UserComment;

    const child2=document.createElement("button");
    child2.textContent="Delete";

    newElement.appendChild(child1);
    newElement.appendChild(child2);

    const commentBox=document.querySelector("#commentBox");
  
    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#cment").value= "";
}

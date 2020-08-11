let likecount = 1;
var counter = 1;

function likehere() {
  likecount++;
  document.querySelector("#like").innerHTML="Like "+ likecount;
}


function commentHere() {
  let newElement = document.createElement("div");
  newElement.textContent = "comment... " + counter;

  newElement.style.background= "tomato";
  newElement.style.margin="4px";


  let commentBox=document.querySelector("#commentBox");
  commentBox.appendChild(newElement);

  counter++;
}

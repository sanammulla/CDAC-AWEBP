let count = 1

function like(){
    let newlike = document.querySelector("#like");
    count++;
    newlike.textContent="Like "+count;
}


function comment(){
    let com = document.querySelector("#myInput").value;
    const newElement = document.querySelector("#commentDiv").cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = com;

    const commentBox = document.querySelector("#commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#myInput").value = "";
}

function delete(this){
    
}


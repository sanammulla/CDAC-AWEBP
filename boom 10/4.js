


function submit(){
    let one = document.querySelector("#id1").value;
    //console.log(one);

    let two = document.querySelector("#id2").value;
    //console.log(two);

    let All = document.querySelector("#cBox");
    All.innerHTML = one+" "+two; 

    let box = document.querySelector("#commentBox").cloneNode(true):
    
    box.insertBefore(All, box.firstChild);

    document.querySelector("#id1").value = "";
    document.querySelector("#id2").value = "";

}
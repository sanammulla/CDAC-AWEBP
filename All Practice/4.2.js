let counter = 1;

function increment(){
    counter++;
    document.querySelector("#count").innerHTML = counter;
}

function decrement(){
    counter--;
    document.querySelector("#count").innerHTML = counter;
}
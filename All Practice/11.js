function fun(){
    var x = document.getElementById("nameId").value
    if(x == ""){
        alert("Name must be filled");
    }
    var y = document.getElementById("passId").value
    if(y == ""){
        alert("Password must be filled");
    }
    var z = document.getElementById("mailId").value
    if(z == ""){
        alert("Enail must be filled");
    }
    var a = document.getElementById("nameId").value;
    var b = document.getElementById("passId").value;
    var c = document.getElementById("mailId").value;
    var s = document.getElementById("displayform");
    s.textContent = "Username is: "+a+" Password is: "+b+" MailId is: "+c;
    document.getElementById("nameId").value = "";
    document.getElementById("passId").value = "";
    document.getElementById("mailId").value = "";
}
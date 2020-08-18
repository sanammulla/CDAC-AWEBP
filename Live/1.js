

function submit(){
    // console.log("success");
    let username = document.querySelector("#input").value;
    // console.log("username");

    document.querySelector("#commentBox").innerHTML= username; 
}




// JavaScript Object Notation :: Son of Javascript
// We create an object using  JSON {} or we can use new keyword

//JSON 
# Rule - 1, It starts and end with curly braces;{}
 - let ref = {}

# Rule - 2
 - it consit of set of properties
 - properties are declared in KEY VALUE PAIR
 - syntax for the kye value pair (KEY : VALUE)
 - we can keep quote
   - single quote
   - double quote
   - quote is optional
   - key always string
   - let ref = {
     name : "sanam",
   }; 
 - ref - object name 
 - let ref = {
     "first-name":"sachin"
 };
 - let student ={
     firstName:"sanam",
 };
 - let count = {
     id:100,
 };
 - let person = {
    list:[10,20,30],
 };
 
# Rule - 3
 - object consost of set of properties 
 - we can declare zero,one or more
 - 
 - let person = {
    id:10,
    firstName:"sanam",
    lastName:"Mulla",
}

# Rule - 4
 - how to Access properties of an object 
 -  
 - person.id
 - person['id']

 - let person = {
     id:10,
     "first-name":"sanam",
     LastName:"Mulla",
 };

 let list = [1,2,3];
 let list = ["a","b","c"];

 let list = [
     { id:1,firstName:"sanam",LastName:"Mulla",},
     { id:2,firstName:"rahul",LastName:"patil",},
 ];

 let person = { id:1, firstName:"sanam"};
 let list = {}









let Person = require('./person');   //inport
let Employee = require('./employee');

class Main{
    static main(){
        console.log("I am static main and Cool..!!!");

        let p = new Person();
        let output = p.getName();
        console.log(output);

        let e = new Employee();
        let ehello = e.hello();
        console.log(ehello);
    }
}

Main.main();

class Calculator{
    add(n1,n2){
        return n1+n2;
    }

    sub(n1,n2){
        return n1-n2;
    }
}


// let output = Calculator.add(5,2);
// console.log(output);

let obj = new Calculator.add(5,2);
let output = obj.add(10,5);
console.log(output);
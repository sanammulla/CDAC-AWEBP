
class Calculator{
    add(n1,n2){
        return n1+n2;
    };

    sub(n1,n2){
        return n1-n2;
    };

    static main(){
        let obj = new Calculator();
        
        let output = obj.add(10,5)
        console.log(output);
        
        let sub = obj.sub(10,5)
        console.log(sub);
    }
}

// let obj = new Calculator();
// let output = obj.add(10,5)
// console.log(output);

Calculator.main();

class Calculator{
    constructor(){
        console.log("this is calculator...!");
    }

    fname(){
        return "sanam";
    }
    lname(){
        return "mulla";
    }

    details(){
        let name = this.fname();
        let sname = this.lname();
        console.log(name+" "+sname);
    }

    static main(){
        
        console.log("this is static function...!");
        
            let c = new Calculator();
            // let d = c.details();
            // console.log(d);
            c.details();
    }
}

Calculator.main();
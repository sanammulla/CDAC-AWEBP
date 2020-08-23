

class Person {
    
    constructor(){
        console.log("I am constructor - special function");
    }

    fName(){
        return "Sanam";
    }

    sName(){
        return "Mulla";
    }

    pdetail(){
        const fname = this.fName();
        const sname = this.sName();
        return fname+" "+sname;
    }

    static main(){
        let p = new Person;
        let info = p.pdetail();
        console.log(info);
    }
}

Person.main();
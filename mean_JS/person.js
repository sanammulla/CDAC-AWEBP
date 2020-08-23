// Data Member
// Constructor :: keyword constructor()
    // - this automaticly call
    //  - creating the object automatic call ths method
// Member Function :: member function is protected :: no any direct call this function
    // - you can aceess 1 condition - you can create object.
    // - using .(dot) operator.
    // - 
// Static Function
    // - this type function directly call
    // - same class other function direct do not call posible
    //  -
    class Person{

    // Special function :: constructor
    constructor(){
        console.log("I am constructor");
    }

    // Normal function :: Member function
    getPersonName(){
        return "I am Don";
    }

    getPersonAddress(){
        return "Mumbai";
    }

    getPersonDetail(){
        const name = this.getPersonName();
        const address = this.getPersonAddress();

        return name+" "+address;
    }


    // Normal function :: Static Member function
    static main(){
        let p = new Person();
        const details =   p.getPersonName();
        console.log(details);
    }
}

Person.main();
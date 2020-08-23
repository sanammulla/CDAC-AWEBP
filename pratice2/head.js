let student = require('./page1');
let teacher = require('./page2');

class Department{
    // constructor()
    static main(){
        console.log("this is department section...!");

        let s = new student();
        let stud = s.sname();
        console.log(stud);

        let d = new teacher();
        let dep = d.tech();
        console.log(dep);
    }
}


Department.main();


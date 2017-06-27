class Teacher {

    //Name:string;
    //SId:number;

    constructor(public Student:string,private Id:number){
    this.Student=Student;
    this.Id=Id;
}
Info(){
 return 'The Student:' + ' ' + this.Student +"'s"+ ' id is ' + this.Id;   
}
}
var stu1=new Teacher("Sameer",1);
var stu2=new Teacher("Ajay",2);
console.log(stu1.Info());
console.log(stu2.Info());

//console.log(stu1.Id)  --- Error constructorexe.ts(19,18): error TS2341: Property 'Id' is private and only 
//accessible within class 'Teacher'.






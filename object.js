console.log("------");

let employee1 = {
    first_name: "Muzahidul",
    last_name: "Islam",
    age: 30,
    // starting_salary: 20000,
    // salary_rang: function (age=this.age){
    //     return this.age * 0.4;
    // },
    get_full_name: function (){
        return "Name:" + this.first_name + " " + this.last_name;
    },
    get_salary: function(starting_salary= 20000){
        return "Salary:" + this.age *.4 * starting_salary;
    }
};
console.log(employee1.get_full_name());
console.log(employee1.get_salary());
console.log("------");
console.log();

console.log("------");
let employee2 = {
    first_name: "Shamim",
    last_name: "Osman",
    age: 28,
    starting_salary: 20000,
};
console.log(employee1.get_full_name.call(employee2));
console.log(employee1.get_salary.call(employee2));
console.log("------");
console.log();

console.log("------");
let employee3 = {
    first_name: "Giyas",
    last_name: "Uddin",
    age: 40,
    starting_salary: 20000,
};
console.log(employee1.get_full_name.call(employee3));
console.log(employee1.get_salary.call(employee3));
console.log("------");
console.log();

console.log("------");
let employee4 = {
    first_name: "Aslam",
    last_name: "Hossain",
    age: 43,
    starting_salary: 20000,
};
console.log(employee1.get_full_name.call(employee4));
console.log(employee1.get_salary.call(employee4));
console.log("------");
console.log();



console.log();
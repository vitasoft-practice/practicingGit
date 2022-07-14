"use strict";
let id = 5;
let age = 20;
let isPublished = true;
let x = "Hello";
x = 5;
let rollnos = [1, 2, 3, 4];
let arr = [1, "sai", true];
rollnos.push(5);
//console.log('x:', x, rollnos)
//tuple
let peopleInfo = [1, false, "correction"];
//Tuple array
let student;
student = [
    [1, "sai"],
    [2, "kiran"],
];
//Union
let pid;
pid = "sai";
pid = 5;
//console.log(pid)
//Enum
var Direction1;
(function (Direction1) {
    Direction1["up"] = "sai";
    Direction1["down"] = "kiran";
    Direction1["left"] = "yadav";
    Direction1["right"] = "Namsani";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "saikiran",
};
console.log(user);
//Type Assertion
let cid = 1;
//let customerId=cid as number or
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 5));
//Void
function log(message) {
    // void so u should not return any value
    console.log(message);
}
log("saikiran");
const user1 = {
    id: 2,
    name: "saikiran1",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//Sub classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const staff = new Person(1, "saikiran");
const associate = new Person(2, "kiran");
const emp = new Employee(32, "saikirannamsnai", "Full stack developer");
console.log(staff, associate, emp);
console.log(staff.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['sai', 'kiran']);
strArray.push('yadav');

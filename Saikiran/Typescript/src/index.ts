let id: number = 5;
let age: number = 20;
let isPublished: boolean = true;
let x: any = "Hello";

x = 5;

let rollnos: number[] = [1, 2, 3, 4];
let arr: any[] = [1, "sai", true];

rollnos.push(5);
//console.log('x:', x, rollnos)

//tuple
let peopleInfo: [number, boolean, string] = [1, false, "correction"];
//Tuple array

let student: [number, string][];

student = [
	[1, "sai"],
	[2, "kiran"],
];

//Union
let pid: string | number;
pid = "sai";
pid = 5;
//console.log(pid)

//Enum
enum Direction1 {
	up = "sai",
	down = "kiran",
	left = "yadav",
	right = "Namsani",
}
//console.log(Direction1.right)

//Objects
type User = {
	id: number;
	name: string;
};

const user: User = {
	id: 1,
	name: "saikiran",
};
console.log(user)
//Type Assertion
let cid: any = 1;
//let customerId=cid as number or
let customerId = <number>cid;

//functions
function addNum(x: number, y: number): number {
	return x + y;
}
console.log(addNum(1, 5));
//Void
function log(message: string | number): void {
    // void so u should not return any value
    console.log(message)
}
log("saikiran")

//Interface is basic Structure or custome type to object
interface UserInterface{
    readonly id: number,
    name: string,
    age?:number, // optional
}
const user1: UserInterface={
    id:2 ,
    name:"saikiran1",
}
//user1.id=5

//interface using a functions
interface MathFunc{
    (x:number,y:number):number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersnalInfo{
    id: number
    name: string
    register(): string
}

//Classes
class Person implements PersnalInfo{
    //you can use this id and name using with access specifers like public , private and protected
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name=name
    }
    register() {
        return `${this.name} is now registered`
    }
}
//Sub classes
class Employee extends Person{
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position= position
    }
}

const staff = new Person(1, "saikiran")
const associate = new Person(2, "kiran")
const emp=new Employee(32,"saikirannamsnai","Full stack developer")
console.log(staff, associate,emp)
console.log(staff.register())

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['sai', 'kiran'])
strArray.push('yadav')
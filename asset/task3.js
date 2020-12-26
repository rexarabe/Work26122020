function Move() {}

const cat = {
    methodMode: new Move(),
};
const dog = {
    methodMode: new Move,
};
const fish = {
    methodMode: new Move,
};

//прототипное наследование

//функция конструктор

function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sayHi= function(){
        return `Hi, my name is ${this.name}`
    }
}

const user1 = new Person('Ivan', 'Ivanov', 20);
console.log(user1);

function Employee(name, surname, age, salary){
    this.name = name;
    this.surname = surname;
    this.age =  age;
    this.salary = salary;
}

Employee.prototype = new Person();

const employee1 = new Employee("", '','',10000000);


const employees = [];
for (let i=0; i<10; i++){
    employees.push(new Employee(`Name${i}`, `Surname${i}`, 18+i, 10000*i))
}

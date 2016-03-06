import SalaryCalculator from './SalaryCalculator.es6';

var s = new SalaryCalculator();
console.log(s.salary);

window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("display").addEventListener('click', () => {
		let emp = new Employee(100, 'Magesh');
		emp.display();
	});	
});

let add = (x,y) => x + y;
console.log(add(100,200));

class Employee{
	constructor(id, name){
		this.id = id;
		this.name = name;
	}
	display(){
		console.log(`my id = ${this.id} and my name = ${this.name}`);
	}

	static whoAmI(){
		console.log('I am an Employee Class');
	}
}



var emp = new Employee(100, 'Magesh');
emp.display();

console.log(Employee.whoAmI());

function addNew(...nos){
	return nos.reduce((result, num) => result + num);
}

class Rectangle {
    constructor (width, height) {
        this._width  = width;
        this._height = height;
    }
    set width  (width)  { console.log(' width setter is executed'); 
    this._width = width;               }
    get width  ()       { console.log(' width getter is executed'); 
    return this._width;                }
    set height (height) { console.log(' height setter is executed'); 
    this._height = height;             }
    get height ()       { console.log(' height getter is executed'); 
    return this._height;               }
    get area   ()       { return this._width * this._height; }
};

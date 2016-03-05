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

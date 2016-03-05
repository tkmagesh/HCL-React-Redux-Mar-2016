"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener("DOMContentLoaded", function () {
	document.getElementById("display").addEventListener('click', function () {
		var emp = new Employee(100, 'Magesh');
		emp.display();
	});
});

var add = function add(x, y) {
	return x + y;
};
console.log(add(100, 200));

var Employee = function () {
	function Employee(id, name) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
	}

	_createClass(Employee, [{
		key: "display",
		value: function display() {
			console.log("my id = " + this.id + " and my name = " + this.name);
		}
	}], [{
		key: "whoAmI",
		value: function whoAmI() {
			console.log('I am an Employee Class');
		}
	}]);

	return Employee;
}();

var emp = new Employee(100, 'Magesh');
emp.display();

console.log(Employee.whoAmI());

function addNew() {
	for (var _len = arguments.length, nos = Array(_len), _key = 0; _key < _len; _key++) {
		nos[_key] = arguments[_key];
	}

	return nos.reduce(function (result, num) {
		return result + num;
	});
}
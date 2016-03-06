(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = SalaryCalculator;
function SalaryCalculator() {
	this.salary = 20000;
}

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SalaryCalculator = require("./SalaryCalculator.es6");

var _SalaryCalculator2 = _interopRequireDefault(_SalaryCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var s = new _SalaryCalculator2.default();
console.log(s.salary);

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

var Rectangle = function () {
	function Rectangle(width, height) {
		_classCallCheck(this, Rectangle);

		this._width = width;
		this._height = height;
	}

	_createClass(Rectangle, [{
		key: "width",
		set: function set(width) {
			console.log(' width setter is executed');
			this._width = width;
		},
		get: function get() {
			console.log(' width getter is executed');
			return this._width;
		}
	}, {
		key: "height",
		set: function set(height) {
			console.log(' height setter is executed');
			this._height = height;
		},
		get: function get() {
			console.log(' height getter is executed');
			return this._height;
		}
	}, {
		key: "area",
		get: function get() {
			return this._width * this._height;
		}
	}]);

	return Rectangle;
}();

;

},{"./SalaryCalculator.es6":1}]},{},[2]);

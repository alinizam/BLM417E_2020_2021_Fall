function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");

console.log(person1)

var person2 = new Human("Sachin", "Tendulkar");

console.log(person2)
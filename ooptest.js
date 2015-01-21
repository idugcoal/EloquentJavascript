function Person(name, gender) {
	
	this.name = name;
	this.gender = gender;
}

Person.prototype.speak = function(){
	console.log("Hey I'm " + this.name);
	}
	
var person = new Person("Bob", "M")

person.speak();
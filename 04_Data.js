var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "TV"]
};
console.log(day1.squirrel);		// -> false
console.log(day1.wolf);			// -> Undefined
day1.wolf = false;				// this is permitted
console.log(day1.wolf);			// -> false
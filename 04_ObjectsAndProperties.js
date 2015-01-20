var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// -> true - they refer to the same object
console.log(object1 == object3);
// -> false - even though their properties contain the same
// value, they refer to different objects

object1.value = 15;
console.log(object2.value);
// -> 15 - since object2 refers to object1, changing the 
// a property in object1 also changes it in object2 
function stack() {
	var arr = [];
	var top = 0;
	this.push = push;
	this.pop = pop;
	this.isEmpty = isEmpty;
}
	
function push(x) {
	this.arr[this.top++] = x;
}

function pop() {
	return this.arr[top--];
}
	
function isEmpty() {
	this.length === 0 ? true : false;
}	


var s = stack();
var t = stack();
var word = "racecar";
for(var i = 0; i < word.length - 1; i++)
	s.push(word[i]);
for(var i = word.length - 1; i >= 0; i++)
	t.push(word[i]);
	
while(!s.isEmpty()) {
	console.log(s.pop());
	console.log(t.pop());
}


/*
var stack() {
	var arr = [];
	var top = -1;
	push = function(x) {
*/	
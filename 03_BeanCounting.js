function countBs(input) {
  var count = 0; 
  for(var i = 0; i < input.length; i++)
    if(input.charAt(i) == "B")
      count++;
  return count;
}

function countChar(input, check) {
  var count = 0;
  for(var i = 0; i < input.length; i++)
    if(input.charAt(i) == check)
      count++;
  return count;
}
    

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
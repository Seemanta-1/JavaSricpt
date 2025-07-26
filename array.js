const number=[1,2,3,4,5]
console.log(number.length)
console.log(number[2])
//set or update by index
let abc=45;
number[1]=abc;
console.log(number)
//push and pop in array
number.push(28);
console.log(number)
number.pop()
console.log(number)
number1=number.pop()
console.log(number1)
console.log(number)
//remove 1st element from the return set
number.shift()
console.log(number)
//insert element in the 1st position of  array
number.unshift(34)
console.log(number)
//check the element of array
console.log(number.includes(45))
//want to know index of an array
console.log(number.indexOf(45))
console.log(number.indexOf(2))
//check array or not
var nums=[]
var nums2='Hello';
console.log(Array.isArray(nums))
console.log(Array.isArray(nums2))



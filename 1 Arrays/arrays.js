//arrays
let num = 10;
let name = "vidhya";

let cities = ["Chennai", "Madurai", "Trichy"];

let marks = [78, 56, 67, 54, 98];

//length - total elements in the array
console.log(marks.length);

//access 2nd element from start - index starts with 0.
console.log(cities[1]);

//access 3rd element in array
console.log(cities[3]);

//last element
console.log(marks[marks.length - 1]);

//mix of int and string
let arr = [5, 6, 7, "a", "abc", [3, 4]];
console.log(arr);
console.log(arr[5][1]);

//2d array
let matrix = [
  [3, 4, 5],
  [4, 5, 7],
  [6, 7, 8],
];
console.log(matrix[2][1]);

//array methods
let array = ["a", "b", "c", "d", "e"];

//push - add element to the end and returns new length
array.push("f");
console.log(array);

//pop - removes element from the end and
//returns removed value
console.log(array.pop());

//shift - removes element from start of the array
//returns removed value
console.log(array.shift());
console.log(array);

//unshift - adds element to the start of the array
//returns new length
console.log(array.unshift("a"));
console.log(array);

//delete
// delete array[2]
// console.log(array[2])

//splice
//1st parameter - starting index
//2nd parameter - no. of elements to be deleted from starting index
//3rd(or more) parameter - values to be inserted from starting index
array.splice(2, 2); //deletes 2 elements starting at index 2
console.log(array);

array.splice(1, 1, "m"); // replace - deletes element at index 1 and inserts 'm'
console.log(array);

array.splice(1, 2, "x", "y"); //deletes elements at position 1 and 2 and inserts 'x','y'
console.log(array);

array.splice(1, 0, "b");
console.log(array);

//slice(starting index, ending index)
//ending index not included
console.log(array.slice(1, 2));

//reverse
array.reverse();
console.log(array);

//join - converts array to  string

let str = array.join();
console.log(str);

//split - converts string to array
let str3 = "g,t,r,e";
let arr3 = str3.split(",");
console.log(arr3);

//concat and spread operator
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let joinedArr = [firstArr, secondArr];
console.log(joinedArr);

joinedArr = firstArr.concat(secondArr);
console.log(joinedArr);

let joined = [...firstArr, ...secondArr];
console.log(joined);

// Exercise
arr1 = [5, 8, 10, 7, 9, 11];

// replace 7, 9, 11 with 17, 19, 111
arr1.splice(3, 3, 17, 19, 111);
console.log(arr1);

// insert 100 in the beginning
arr1.unshift(100);
console.log(arr1);

// Insert 200 in last but one position
arr1.splice(arr1.length - 1, 0, 200);
console.log(arr1);

// add 1000 at the end
arr1.push(1000);
console.log(arr1);

// Insert 0 in the middle , use arr.length to find the length of array
let arrLength = arr1.length;
console.log(arrLength);
arr1.splice(5, 0, 0);
console.log(arr1);

//array 

//array is linear data structure
let array1 = [1, 2, 3, 4, 5];

console.log(array1);

console.log(array1[0]); // accessing first element

console.log(array1.length); // length of array

array1.push(6); // adding element at the end
console.log(array1);

array1.push('monowar'); // adding string element
console.log(array1);

array1.push('Husain', 22301098, 3.56); // adding multiple elements in a single push
console.log(array1);


let multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // multi-dimensional array
console.log(multiArray);
console.log(multiArray[1][2]); // accessing element from multi-dimensional array

console.log(multiArray.length); // length of multi-dimensional array

console.log(multiArray[0][1]); // accessing element from multi-dimensional array

console.log(multiArray[2][0]); // accessing element from multi-dimensional array
console.log(multiArray[2].length); // length of sub-array

multiArray[1].push(7); // adding element to sub-array
console.log(multiArray);

multiArray.push([10, 11, 12]); // adding new sub-array
console.log(multiArray);

console.log(multiArray[3][1]); // accessing element from newly added sub-array      


//pop method removes the last element from an array and returns that element.
let removedElement = array1.pop();
console.log("Removed Element:", removedElement);
console.log("Array after pop:", array1);

//shift method removes the first element from an array and returns that element.
let shiftedElement = array1.shift();
console.log("Shifted Element:", shiftedElement);
console.log("Array after shift:", array1);

//unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
let newLength = array1.unshift(0);
console.log("New Length after unshift:", newLength);
console.log("Array after unshift:", array1);            


//array methods
//forEach method executes a provided function once for each array element. like for loop

let array2 = [10, 20, 30, 40, 50];

array2.forEach((element) => {
    console.log("Element:", element);
});


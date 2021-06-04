// we will learn advance loop methods in future like and they will be in advanceArrayMethods.js file (every, filter, find, findIndex, forEach)

// the file contains only most common used array methods you can check for all methods in mdn


// concat method is use to concate 2 arrays and return new array it not affect to actual arr
// also there is ... spread opraor that we can use instade of it

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = arr1.concat(arr2)
console.log(arr3);

let arr3 = [...arr1, ...arr2]
console.log(arr3);


let arr3 = arr1.concat(1,2,arr2)
console.log(arr3);

let arr3 = [1, 2 , ...arr1, ...arr2]
console.log(arr3);



// entries method return new array which have sub arrays every sub arrays first indexd will be index of that element and seccond will be value it self

let arr = ['a', 'b', 'c']
console.log(arr.entries());

// note that entries is itrator so you can't see actual data by consoling like above it will be type of itrator only you can do like this
console.log([...arr.entries()]);

// or the best use of it is in loops

for (let [i, dt] of arr.entries()){
    console.log(i, dt);
}


// flat method is use to get every sub element from array and create  new array with just single element in every index, it require 1 optional pearmiter as deep which define how deep you want to go for flatting
// the alternative of flat is requce and concat method which we will learn in advance arr section

let arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));

console.log(arr2.flat(3));

let arr2 = [0, [1], [[2]], [[[3, 4]]]];
console.log(arr2.flat(3));


// includes method is use to check if any perticular value is in arr or not it require 2 paramiter what to check and index to start check (optional)

[1,2,3].includes(2)

[1,2,3].includes(10)

// start from 2 index 
[1,2,3].includes(2, 2)

// start from 7 index which is not in arr so return false
[1,2,3].includes(2, 7)

[1,2,3].includes(2, -1)

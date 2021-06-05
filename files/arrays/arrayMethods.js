// we will learn advance loop methods in future like and they will be in advanceArrayMethods.js file (every, filter, find, findIndex, forEach, map, reduce, reduceRight, some, sort)

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


// index of is a function which youe to find index of perticular element
// it give only vary first auccerance of element of array
// it accept 2 paramiters what to find and start index (optional)
// it return -1 if index not found or if starting index in arrays is grater then length of array

[1,2,3].indexOf(2)

// start from 1 index
[1,2,3].indexOf(3, 1)

// start from 2 index
[1,2,3].indexOf(3, 2)

[1,2,3].indexOf(9)

// lastIndexOf() is same as undex of just it return last accurance of element in arr

// start from grater then or equal to arr length
[1,2,3].indexOf(3, 3)
[1,2,3].indexOf(3, 7)



// join method use to join array with spacific saprator and return string

[1,2,3].join()
[1,2,3].join('-')
[1,2,3].join('')
[1,[2],[[3]], {a:"a"}].join()



// push method add new element in end of array it can also add multiple elements at a time and return new length of array and it can change actual array


let a = [1,2,3]

a.push(4)
a.push(5,6, ...a)



// pop method removes last element of array and return it and also it can change actual array

let a = [1,2,3]
let last = a.pop()


// unshift method is just like push but it add at starting of array
// shift method is just like pop but it removes from starting of array



// slice method is use to slice from array it returns shallow copy of array and not change in actual array requires 2 arguments start (default 0) end (drfault arr.length -1)
// in end index it will stop before one index of ginen end number

[1,2,3].slice(1)
[1,2,3].slice(1,2)
[1,2,3].slice(-1)
[1,2,3].slice(0,-1)
[1,2,3].slice(-2,-1)
[1,2,3].slice(9)
[1,2,3].slice(-8, -2)


// splice method is use to take some parts from array it mutate actual array and it require 3 paramiters start , how much index from start, if any other replacment thers

['a', 'b', 'c', 'd', 'e'].splice(0, 3)
['a', 'b', 'c', 'd', 'e'].splice(1, 3)

let arr = ['a', 'b', 'c', 'd', 'e']

let changed = arr.splice(0, 3, 'hi')

let arr = ['a', 'b', 'c', 'd', 'e']

arr.splice(0, 3, 'hi', 'hi')

let arr = ['a', 'b', 'c', 'd', 'e']

arr.splice(0, 3, 'hi', 'hi', 'hi', 'hi')


['a', 'b', 'c', 'd', 'e'].splice(-2, 1)
['a', 'b', 'c', 'd', 'e'].splice(-2, 4)


// arr.toString() returns string representation of array 

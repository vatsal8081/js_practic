// advance array methods also knows as data transformation methods 
// this methods are spacial type of array methods which accept callbacks and return new array or any other things at end

// it is vary importent to understand in which situation use which methods and it will be easy when we understand return values of every methods at end
// we can also chain this methods togather to generate  final output



// map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// use when you want to pufform any opration on every element of array
// not use map when you don't want new array from existing when you want to manupulate same array then use forEach instade

// map excepts a callback which will call on every element of array
// in callback map provide element, index, array in every itration
// it's our responsiblity to return which we want to push in new array in every itration of callback function if we wont return any thing map push undefine
// at the end map will return new array 

let arr = [1, 2, 3]
let newArr = arr.map((el, i, ar) => {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
    return el + 1
})

let newArr = arr.map((el) => el * el)

let arr = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
]

let newArr = arr.map((el) => el.num)

// if we not return anything map push undefine for that itration
let arr = [1, 2, 3]
let newArr = arr.map((el, i, ar) => {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
})



// filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// use when you want to create filter array base on particular condition and want to create new array

// filter excepts a callback which will call on every element of array
// in callback filter provide element, index, array in every iteration
// it's our responsiblity to return boolean base on that filter will push element to new array. if we don't return any thing filter will not push it to array
// at end filter will return new array

let arr = [1, 2, 3]
let newArr = arr.filter((el, i, ar) => {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
    return el > 1
})


let newArr = arr.filter(el => el > 1)

function even(el) {
    return el % 2 === 0
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNums = arr.filter(even)

// not return anything then it not push
let newArr = [1, 2, 3].filter(el => { })



// reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// reduce has accumulator which will stay available in every iteration so if you want to calculate something base on this and want to return single value at end reduce is useful

// reduce excepts a callback which will call on every element of array and starting value of accumulator
// in callback reduce provide accumulator, element, index, array in every iteration
// in function we can play with all this values and if we return something then it will become value of accumulator for remening iterations and if not then it will be default value which we provide

let arr = [1, 2, 3]

let newArr = arr.reduce((acc, el, i, ar) => {
    console.log(`accumulator : ${acc}, element : ${el}, index : ${i}, array : ${ar}`);

    return acc + el

}, 0)

let arr = [-1, 2, 3, -1, 8, 6]

let max = arr.reduce((acc, el) => { return acc > el ? acc : el }, 0)

// flat arr with reduce

let arr = [[1], [2], [3]]

function flat(acc, el) {
    return [...acc, el[0]]
    // return acc.push(el[0])
}

let flatArr = arr.reduce(flat, [])



// find
// the find() method finds element from array which match some condition
// use when you want to find some element from array
// find excepts a callback which will call on every element of array
// in callback find provide element, index, array in every iteration
// it's our responsibility to return boolean base on that find will imminently return that element if it's true. if we don't return any thing find will return undefine
// find will return current element immediately when provided condition is true 
// find and filter are similar but filter will return [] at end where true condition data pushed in it and find will return just first element which pass given condition


let arr = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 }
]


let element = arr.find((el, i, ar) => {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
    return el.name === 3
})


// findIndex
// the findIndex() method finds element from array which match some condition and return index of it
// use when you want to find some element's index from array
// findIndex excepts a callback which will call on every element of array
// in callback findIndex provide element, index, array in every iteration
// it's our responsibility to return boolean base on that findIndex will imminently return that element's index if it's true. if we don't return any thing find will return undefine
// findIndex will return current element's index immediately when provided condition is true 
// findIndex and filter are similar but filter will return [] at end where true condition data pushed in it and findIndex will return just first element's which pass given condition

// findIndex and indexOf are kind of similar we can use both base on situations

let arr = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 }
]


let element = arr.findIndex((el, i, ar) => {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
    return el.id === 3
})



// some 
//some method is same as incleuds() function only diffrence is inclueds check only for equality and in some we can check anything and return boolean base on it
// use when you want to check if atleast any one element of array satisfy provided condition
// like other methods give element, index, and array
// return true if any one element satisfy given condition else return false
// use only when want to check condition which is not === because for that includes will work easily

let arr = [1, 2, 3, -3, 6, 7, -7]

arr.some(el => el < 0)

// every 
// every is exactly same like some only difference is it return true only when all elements satisfy given condition else return false

let arr = [1, 2, 3, -3, 6, 7, -7]

arr.every(el => el < 0)

let arr = [1, 2, 3]
arr.every(el => el > 0)




// sort



// programmatic array generation 

// we will discuss some methods which we can use with combination to create arrays 
// new Array

// new Array method create new array from given params, strange thing to keep in mind for new Array is it create new array if we pass multiple params and create empty array of given number if we pass single number

new Array(1, 2, 3)
new Array(3)
new Array('3')


// fill 
// fill method is use to fill array from any given data
// it also except start and end indexes

new Array(3).fill(undefined)

[1, 2, 3].fill(4)

[1, 2, 3, 4].fill(5, 1, 3)

[1, 2, 3, 4].fill(5, 1, -2)





// now almost all array methods is charitable that mins you can chain all array methods with each other to generate final output and also to other string and object method as well as long as method which you call before current method returns object type require by current method
// for that you just have to keep in mind which array method returns what and except what


let arr = [1, 2, 3, 4]

arr.map((el) => el + 1)
    .filter((el) => el > 3)


arr.map((el, i) => el + i)
    .filter((el) => el !== 1)
    .reduce((acc, el) => acc + el, 0)


arr.filter((_, i) => i > 1)
    .findIndex((el) => el === 4)


let arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
]

arr.filter(({ id }) => id >= 2)
    .findIndex(({ id }) => id === 2)

arr.map(({ id }) => id + 1)
    .every((id) => id > 1)

let arr = ['A', 'B', 'C', 'D']

// calling array to string methods example
arr.toString().toLowerCase()
arr.toString().toLowerCase().charAt(1)
arr.toString().toLowerCase().length


// calling string to array methods example
let str = 'a b c d'

str.toUpperCase().split(" ").map((el, i) => el + i)

str.toUpperCase().split(" ").map((el, i) => el + i)
    .filter((el) => el.charAt(el.length - 1) !== '0').join(' ')

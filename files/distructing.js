// Arrays

// from function
let foo = () => [1, 2]

let [a] = foo();
console.log(a);

// ommit some valeus
const tmp = [1, 2, 3]
let [a, , b] = tmp
console.log(a, b);

// default values 
const tmp = [1, 2, 3]
let [a = 100, , b] = tmp
console.log(a, b);
let [a, , b, c = 100] = tmp
console.log(a, b, c);


// Combine with spread/rest operator (accumulates the rest of the values)
const tmp2 = [1, 2, 3, 4, 5]
let [a, , b, ...rest] = tmp2
console.log(a, b, rest);

// Fail-safe.
let [, , , a, b] = [1, 2, 3];
console.log(a, b);

// Swap variables easily without temp
let a = 1
let b = 2
[a, b] = [b, a]
console.log(a, b);

// Advance deep arrays
let tmp3 = [1, [2, [[[3, 4], 5], 6]]];
let [a, [, [[[b], c]]]] = tmp3
console.log("a = ", a, "b = ", b, "c = ", c);


// object

// simple
let { abc } = { abc: 1 }
console.log(abc);

// give diffrent name to var then key
let { abc: a } = { abc: 1 }
console.log(a);


// Fail-safe
let { user: x } = { user2: 5 };
console.log(x);
// => undefined


// more values
let { one: a, two: b } = { one: 1, two: 2, three: 3 }
console.log(a, b);

// default values
let { one, two, four = 4 } = { one: 1, two: 2, three: 3 }
console.log(one, two, four);

// default values with diffrent key
let { one: a, two: b, four: c = 4 } = { one: 1, two: 2, three: 3 }
console.log(a, b, c);


// assign value to already declare vars

// Oops: This doesn't work:
// var a, b;
// { a, b } = {a: 1, b: 2};


// this will work
let a, b
({ a, b } = { a: 1, b: 2 })
console.log(a, b);

// This due to the grammar in JS. 
// Starting with { implies a block scope, not an object literal. 
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement positions, so a plain object
// destructuring assignment statement
//  { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y.



// === Combined destructuring of objects and arrays

// Combine objects and arrays
let { prop2, prop2: [, b] } = { prop: 5, prop2: [10, 100] };
console.log(prop2, b);


let { two: { two: { nested } }, two: { two: { nested: [, b] } } } = { one: "Hello", two: { two: { nested: ["a", "b", "c"] } } }
console.log(nested, b);


// computed key name
let a = 'one'
let obj = { [a]: 1 }
let { [a]: ans } = obj
console.log(ans);

// hear we are creating key name as variable's value (in this case one) then 
// trying to distruct one from obj so we don't know the key name but it's
// in the var so we use [] to use variable's value as distructing
// but js will consider [] as array distruct so to tell it's a computed property
// in this type of case we have to compulsary use : and new var name   




// rest and default in func
function abc({ url = 'local', port: p = 1 }, ...rest) {
    console.log("Url:", url, "Port:", p, "Rest:", rest);
}

abc({ url: "someHost" }, "additional", "data", "hello");


abc({}, "additional", "data", "hello");

abc({});

abc()

// above function with default obj
function abc({ url = 'local', port: p = 1 } = {}, ...rest) {
    console.log("Url:", url, "Port:", p);
}

abc();

abc({});

let users = [
    { user: "Name1" },
    { user: "Name2" },
    { user: "Name2" },
    { user: "Name3" }
];

let names = users.map(({ user }) => user)
console.log(names);

// use in loops
let data = [
    { name: 'abc', num: [1, 2, 3] },
    { name: 'xyz', num: [4, 5, 6, 7] },
    { name: 'oop', num: [1, 2] }
]


for (let { name, num: [, , a = 10] } of data) {
    console.log(name, a);
}

// note : @ distructing obj time a , pachi je pn experession lakho eema last ma define thayelo var j madse
// like uppar na exam pal ma num:[, , a = 10] ma num nau made pn a j madse
//  let {two:{two:{nested}}, two:{two:{nested:[, b]}}}  = { one: "Hello", two: { two: { nested: ["a", "b", "c"]}}}

// aa vada ma 1 ma nested and 2 ma b j madse biji koi key nai made 
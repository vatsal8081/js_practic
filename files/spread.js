// spread can work in all itrables
// if it's right side of assignment(=) or in function call then its spread
// if it's left side of assignment(=) or in function declaration then its rest 

// spread

// spread string 
let a = [..."abc"]
console.log(a);

// push into array with spread

let a = [1, 2, 3]
let b = 4
a = [...a, b]
console.log(a);

a = [...a, ...a]
console.log(a);

// use in function call to sperd array as individual params
function abc(x, y, z){
    return x + y + z
}

let a = [1,2,3]
console.log(abc(...a));

// if pass extra then also function will take 3 from them
let a = [1,2,3, 4,5]
console.log(abc(...a));


// shellow copy array
let a = [1,2,3]
let b = [...a]
console.log(b);


// shellow copy object
let a = {one: 1, two:2}
let b = {...a}
console.log(b);

b = {...a, three:3}
console.log(b);


// rest
// A function definition and distruct can have only one ...restParam
// The rest parameter must be the last parameter in the function definitiona and distruct

function abc(a,b, ...rest){
    console.log(a,b, rest);
}


abc(1,2,3,4,5,6);


// in array distruction 
let [a,b, ...rest] = [1,2,3,4,[5,6]]
console.log(a,b,rest);

// in obj distruction
let {one, two= 2.2, ...rest} = {one:1, two:2, three:3, tmp: {four:4}}
console.log(one,two,rest);


// rest can also use in distruction of arr or obj see examples in distructin.js




// now we can better use sperad and rest to create function that can accept n numbers or argument

function abc(...arge){
    console.log('real arge', arge);
    console.log('spraded arge', ...arge);
}

abc(...[1,2,3,4])

let a = [1,2,'one', [3,4]]
abc(a)

abc(1,2,3)

abc(1,2,3, ...a, 5)

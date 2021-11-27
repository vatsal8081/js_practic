import './modules/shoppingCart.js';

// we can import named exports like that
import { addToCart, total, name, age } from './modules/shoppingCart.js';

// import { name as userName, age as userAge } from './modules/shoppingCart.js';
// console.log(userName, userAge);
// you can use as to alias the import if you want


console.log('total from shopping cart is : ', total);

addToCart('bread', 2)

console.log(`name is ${name} and age is ${age}`);


import * as ShoppingCart from './modules/shoppingCart.js'
ShoppingCart.addToCart('banana', 3)
console.log(ShoppingCart.name);
// we can also import everything from module like this and now ShoppingCart is like
// a object which we can use to get access to every exports from module 
// usually we follow all first character in capital notation in alias of all import



// default exports
import paint from './modules/car.js';
paint('black')



// import carModule, { size, passing, addTyre } from './modules/car.js';
// if we have default and named exports in our module then we can import both like that
// all defaults will be in carModule and all named exports will be in {} syntax
// but in real world we usually never mix default and named exports so a module should only return default or named export



// now when we import any thing in our file only in ES6 modules it's not just a copy of exported value
// it's reference to that export that mins if exported value change anywhere then imported value also change in every place


import { studentData, addStudent, emptyStudentData } from './modules/students.js';

console.log('student initially', studentData);

addStudent({ name: 'vatsal', age: 24 })

console.log('student after add', studentData);

emptyStudentData()

console.log('student after empty', studentData);

// hear we can see initial value of studentData is [] then we add data in it 
// but we exported [] and when we change data in module we also get change in hear
// so by this we can prove that import is reference of it's export so if it change
// where it's exported then all places where it's imported will also change 
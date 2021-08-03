// as you can see hear we are just exporting value as default and thats how we default export
// a default export has no any name so we can call it anything when we want to import it
// the module will by default give what we default export from module
// we mostly use default exports when we want to export only one time and one thing from module

export default function (color) {
    console.log(`we paint your car with ${color} color.`);
}

// let name = 'Volvo'
// function paint(color) {
//     console.log(`we paint your car with ${color} color.`);
// }
// export default {
//     name, paint
// }

// we can also export multiple things as default and we can access it like that

// import carModule from './modules/car.js';
// console.log('car name', carModule.name);
// carModule.paint('dark blue')  

// the name we give to our default export will be object which has all properties we default export 


// notice in named exports if we use {} and export any thing they will be separated and we can import it by same name
// but in default export if we use {} then we will get object with which we can access all default exports
console.log('imported Shopping cart');


// in ES6 modules there are 2 type of exports named exports and default exports

// named exports
// - named exports are use to export multiple things from same module
// - and we just have to put export in front of any thing to export as named exports
// - keep in mind named exports only work when we import it by same name we export it from module


let cart = []
export let total = 200

export function addToCart(product, quantity) {
    cart.push({ product, quantity })
    console.log(`we pushed ${quantity} ${product} in cart`);
}


// we can also named export multiple things at same time
const name = 'vatsal'
const age = 24

export { name, age }
// note hear it's looks like we are combining name and age in object and returning it
// but it's not like that we just using {} to export different things at same time
// where we import it we can use same name to import and if we want we can only import name not age


// export { name as userName, age as userAge }
// we can also alias exports in our module and then we have to import it from alias everywhere
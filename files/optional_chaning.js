// optional chaning is introduce in 2020 and its use to solve common problme which we face in objects
// optional chaning will first check if lefthand side property is exist or not if yes then go forwared (right hand side) otherwise return undefine 
// optional chaning not have any bussiness with content of the property it just ensure it exist or not 

let obj  = {
    name: 'abc',
    size: {hight:255, weight: 120},
    func(){
        console.log('func call');
    }
}

// if obj property exist then go to grab name
console.log(obj?.name);

// if obj property exist then go to grab xyz which is not present in obj so will give undefine
console.log(obj?.xyz);

// if obj property exist then go to grab size if size persent go for hight
console.log(obj?.size?.hight);

// if obj property exist then go to grab xyz if xyz present go for hight other wise return undefine
console.log(obj?.xyz?.hight);

// can also use with [] notation
let key = 'weight'
console.log(obj?.size?.[key]);
console.log(obj?.size?.[key]?.aaa);

key = 'xyz'
console.log(obj?.size?.[key]);

// can also use to check if function exist or not before function call brackets just put ?.
obj?.func?.()

// also use in function params
function abc(one, two){
    console.log(two?.abc);
}

function abc(one, two){
    console.log(two?.());
}


// cant use in assignments
let abc = xyz?.one

// can use in arr
let a = [1,2,3,4]
console.log(a?.[3]);

console.log(a?.[5]);



// combining other oprators


let obj  = {
    name: 'abc',
    size: {hight:255, weight: 120},
    func(){
        console.log('func call');
    }
}


console.log(obj?.name ? obj?.name : "NA");

console.log(obj?.xyz ? obj?.xyz : "NA");

console.log(obj?.size?.hight ? obj?.size?.hight : "NA");

console.log(obj?.size?.www ? obj?.size?.www : "NA");

let key = 'www'
console.log(obj?.size?.[key] ? obj?.size?.[key] : "NA");

console.log(obj?.func ? obj?.func() : "NA");


console.log(obj?.name ?? obj?.name);
console.log(obj?.xyz ?? obj?.xyz);





// a higher oeder function is a type of function which take another function
// as paramiter and execute it 
// this type of thing is vary common in js and can be seen many places
// it allows us to do diffrent things in one function


function addPaddingEnd(str){
    return str.padEnd(40, "+")
}

function addMr(str){
    return `Mr. ${str}`
}


function transform(str, fn){
    console.log('str is', fn(str));
}

transform('hello', addPaddingEnd)
transform('hello', addMr)

// you can see we are not calling ( () ) a function when we pass it will done by 
// higher order function itself


// this method is seen in many built in js methods

['a', 'b', 'c'].forEach((el)=>{
    console.log(el);
});


setTimeout(()=>{
    console.log('ok');
},1000);


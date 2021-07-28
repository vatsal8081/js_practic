let tmp = "abc"

let person = {
    name: 'jhon',
    age: 30
}


function change(name, obj) {
    name = 'xyz'
    obj.name = 'lisa'
}

change(tmp, person)
console.log(tmp, person);

// abc {name: "lisa", age: 30}
//age: 30
//name: "lisa"

// did you see the tmp stay same after changing name in function but person.name change after changing obj.name

// this behiovure happens because objects are reference type so when we pass
// obj even as function parameter it not pass different obj it only pass reference
// of main object so when we change in any of one it will affect to both function //// parameter object and main object as well but it will not the case for string, ////  number and other primitive types
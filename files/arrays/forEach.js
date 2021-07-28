// foreach is spacial type of loop which use to iterate over array
// it wont require index or any thing
// if require callback in which we will do what we want to do with each index and it pass 3 parameters for us element, index, and whole array in each itration


let arr = ['a', 'b', 'c', 'd']

arr.forEach((el, index, array) => {
    console.log(`element : ${el}, index : ${index}, array : ${array}`);
});

// similar to 

for (let [i, el, ar = arr] of arr.entries()) {
    console.log(`element : ${el}, index : ${i}, array : ${ar}`);
}


// the only deference between for of and forEach is we can't break and continue in forEach but in for of

// not possible like this
arr.forEach((el) => {
    if (el === 'b') {
        continue
    }
    if (el === 'd') {
        break
    }

    console.log(el);
});


// possible
for (let el of arr) {
    if (el === 'b') {
        continue
    }
    if (el === 'd') {
        break
    }

    console.log(el);
}


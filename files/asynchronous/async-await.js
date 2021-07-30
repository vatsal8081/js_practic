// as we know using then and catch in our code makes easy instead of callbacks
// but with then the problem is we also use callbacks and we can wright more clean code with async await
//  the async await provide ability to wright asynchronous code more like synchronous

// async await just return promise 
// just keep in mind then = await
// where where we need to use then to wait until asynchronous task complete we can use await instead
// what happens behind the seen is where js engine sees await it wait to get response and then after response continue code
// we can use await where we get promise to wait for response but keep in mind
// when we are doing await in any function we should use async in front of function 
// so js can identify that in function we can do some asynchronous tasks
// we can chain more and more promise with await like we do in then

// async - await is just different syntax and way to consume promises keep in mind
// this won't change the way we create promise it just change way we consume it



// simple async await
const res = await fetch('https://restcountries.eu/rest/v2/name/india')
const resJson = await res.json()
console.log('res', res);
console.log('resJson', resJson);


// chain
let mainCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
let [, { borders: [, , , , , nepalCode] }] = await mainCountry.json()
let nepalData = await fetch(`https://restcountries.eu/rest/v2/alpha/${nepalCode}`)
nepalData = await nepalData.json()
console.log(nepalData);
// like this we can chain multiple promises in sequence and it will work as synchronous code
// hear every await like then return promise default and to use it in other promise we can save it in variable 


// using in func 
const getNaibourByCountry = async (mainCountryName) => {
    let mainCountry = await fetch(`https://restcountries.eu/rest/v2/name/${mainCountryName}`)
    let [, { borders: [, , , , , nepalCode] }] = await mainCountry.json()
    let nepalData = await fetch(`https://restcountries.eu/rest/v2/alpha/${nepalCode}`)
    return nepalData = await nepalData.json()
    // return nepalData
}

console.log(await getNaibourByCountry('india'));
console.log(getNaibourByCountry('india'));
// as i told you early that if we use await in function then we should use async in front of function
// so js know that we can do async tasks in function
// and if we return  return nepalData = await nepalData.json() then we are returning promise 
// because as we know every await return promise so to get data in clg we also use await because at the end function returning promise only 
// and if we do return nepalData then we are telling js to wait for get data of nepal assign to variable then return it
// as we know using then and catch in our code makes easy instead of callbacks
// but with then the problem is we also use callbacks and we can wright more clean code with async await
//  the async await provide ability to wright asynchronous code more like synchronous

// async await just return promise 
// just keep in mind then = await
// and there is one rule in async await is an async function always return promise
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
    return nepalData.json()
}

console.log(await getNaibourByCountry('india'));
console.log(getNaibourByCountry('india'));
// as i told you early that if we use await in function then we should use async in front of function
// so js know that we can do async tasks in function



// handling errors 
try {
    let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
    myCountry = await myCountry.json()
    console.log('my country', myCountry);
}
catch (err) {
    console.log('err', err.message);
}
finally {
    console.log('always call');
}
// like this with traditional try catch we can catch all possible errs in asynchronous calls and we can use finally like this to call wather try or catch execute



try {
    let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
    let [, { borders: [, , , , , nepalCode] }] = await myCountry.json()
    let nepalData = await fetch(`https://restcountries.eu/rest/v2/alpha/${nepalCode}`)
    console.log(nepalData);
    await Promise.reject('manually rejected promise')
}
catch (err) {
    console.log('hear', err);
}
// and we can catch any error that comes from any async call in catch block
// we can also manually reject promise like this



const getData = async () => {
    try {
        let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
        myCountry = await myCountry.json()
        return `my country is  ${myCountry[1].name}`
    }
    catch (err) {
        console.log('some err auccor', err);
    }
}

console.log(getData());
// as you can see we are getting country data in variable and then returning string
// but when we do console like this we get promise but don't we await and then return string
// ues but the thing is there is rule with every async function async function always return promise 
// and if we return something from async function then that will be fulfilled result of that promise
// only we return Promise.reject() then only it will we rejected promise and accessible in catch
// wether you throw string or any thing the final return value will be promise from async function
// and so we can get that by await and the thing we return from function will be fulfilled value of promise
console.log(await getData());

// now turn off internet connection and run this
try {
    console.log(await getData());
}
catch (err) {
    console.log('err', err);
}
// when we do this because there is no internet so fetch will fail and reject promise
// and then that will be caught in catch block of function and console inside catch of function will print
// but console in catch block where we call function will not print 

const getData = async () => {
    try {
        let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
        myCountry = await myCountry.json()
        await Promise.reject('rejected promise')
    }
    catch (err) {
        console.log('some err auccor', err);
    }
}
// also when we do this catch of function will execute buy where we call function that catch won't work
// because the reason behind this is like .catch() method in normal try catch err won't propogate down in all catch blocks
// we have to manually throw it to other catch block like this 

const getData = async () => {
    try {
        let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
        myCountry = await myCountry.json()
        return `my country is  ${myCountry[1].name}`

        // return Promise.reject('rejected')
        // if we do this then the promise will be rejected and we will able to catch it 
        // inside catch block where we call function
    }
    catch (err) {
        console.log('some err auccor', err);
        throw err;
    }
}
// now after doing this we are rethrowing err from catch to caught it to other catch block 
// so make just one rule when we are returning something form async function 
// use try catch and await alwase amd also throw err in catch


// using async await practice


const lottery = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log(random);
        random > 0.5
            ? resolve({ msg: 'you win.', random })
            : reject({ msg: 'you louse', random })
    })
}


try {
    const lotteryOne = await lottery()
    console.log('lottery one', lotteryOne.msg);
    const lotteryTwo = await lottery()
    console.log('lottery two', lotteryTwo.msg)
}
catch (err) {
    console.log(err.msg);
}

const drawLotterys = async () => {
    try {
        const lotteryOne = await lottery()
        console.log('lottery one', lotteryOne.msg);
        const lotteryTwo = await lottery()
        console.log('lottery two', lotteryTwo.msg)
    }
    catch (err) {
        console.log(err.msg);
    }
}

const onWinCallApi = async () => {
    try {
        const lottryResult = await lottery()
        console.log('lottery resuly', lottryResult);
        const apiResult = await fetch('asdfdfdfafdf')
        console.log('api resuly', apiResult);
    }
    catch (err) {
        console.log('some err : ', err);
        throw err;
    }
}


// promisify fetch like axios
const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {

        try {
            let response = await fetch(url)
            let responseData = await response.json()
            if (response.status < 399) {
                resolve({
                    status: response.status,
                    url: response.url,
                    ok: response.ok,
                    data: responseData
                })
            }
            else {
                reject({
                    status: response.status,
                    url: response.url,
                    ok: response.ok,
                    data: responseData
                })
            }
        }
        catch (err) {
            reject(err)
        }

    })

}


try {
    let res = await fetchData('https://restcountries.eu/rest/v2/name/india')
    console.log('res', res);

}
catch (err) {
    console.log('err : ', err);
}


// 

const abc = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    await fetch('https://jsonplaceholder.typicode.com/users')
}

const xyz = () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(()=>{})
    fetch('https://jsonplaceholder.typicode.com/users').then(()=>{})
}

const opt = () => {
     fetch('https://jsonplaceholder.typicode.com/todos')
     fetch('https://jsonplaceholder.typicode.com/users')
}


// run this 3 functions one by one and observe waterfall section under network tab for each in 1 function you will see that first todos api call and after resolving that users api will call and in 2 because we are not chaining api call into eachother they both will call in same time and in 3 we also not chaining in callbacks thatswhy 3 will also call both apis in same time

// that mins when we use async in any function all await call will be execute one after eachother that mins after resolving one other will call and in most off the time that is not what we want because this behabiour is necasary when other api call is depandend on first one so it's good so send all apis requests at a same time so we don't have to wait much 

// this behaviour is already there in then when we not nest them so to achive the same we use compinator functions which we learn before in combinator.js

// keep in mind when you call more then one apis in same async function then bydefault they will be call one after another if you don't want that you want to call them parallely then use combinator functions
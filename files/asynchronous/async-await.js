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



// hendlong errors 
try{
   let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
   myCountry = await myCountry.json()
   console.log('my country', myCountry);
}
catch(err){
    console.log('err', err.message);
}
finally{
    console.log('always call');
}
// like this with tredisnal try catch we can catch all possible errs in asynchronous calls and we can use finally like this to call wather try or catch execute



try{
    let myCountry = await fetch('https://restcountries.eu/rest/v2/name/india')
    let [, { borders: [, , , , , nepalCode] }] = await myCountry.json()
    let nepalData = await fetch(`https://restcountries.eu/rest/v2/alpha/${nepalCode}`)
    console.log(nepalData);
    await Promise.reject('manuly rejected promise')
}
catch(err){
    console.log('hear',err);
}
// and we can catch any error that comes from any async call in catch block
// we can also manuly reject promise like this



// using async await practis


const lottery = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log(random);
        random > 0.5
            ? resolve({ msg: 'you win.', random })
            : reject({ msg: 'you louse', random })
    })
}


try{
    const lotteryOne = await lottery()
    console.log('lottery one', lotteryOne.msg);
    const lotteryTwo = await lottery()
    console.log('lottery two', lotteryTwo.msg)
}
catch(err){
    console.log(err.msg);
}

const drawLotterys = async () => {
    try{
        const lotteryOne = await lottery()
        console.log('lottery one', lotteryOne.msg);
        const lotteryTwo = await lottery()
        console.log('lottery two', lotteryTwo.msg)
    }
    catch(err){
        console.log(err.msg);
    }    
}

const onWinCallApi = async () => {
    try{
        const lottryResult = await lottery()
        console.log('lottery resuly', lottryResult);
        const apiResult = await fetch('asdfdfdfafdf')
        console.log('api resuly', apiResult);
    }
    catch(err){
        console.log('some err : ', err);
    }
}


// promisifing fetch like axios
const fetchData = (url) => {
    // let tmpResponseHolder = {}
    return new Promise( async (resolve, reject) => {

        try{
            let response = await fetch(url)
            // tmpResponseHolder = response
            responseData = await response.json()
            if(response.status < 399){
                resolve({
                    status: response.status,
                    url: response.url,
                    ok: response.ok,
                    data: responseData
                })
            }
            else{
                reject({
                    status: response.status,
                    url: response.url,
                    ok: response.ok,
                    data: responseData
                })
            }
        }
        catch(err) {
            reject(err)
        }

    })

}


try{
    let res = await fetchData('https://restcountries.eu/rest/v2/name/india')
    console.log('res', res);

}
catch(err){
    console.log('err : ', err);
}
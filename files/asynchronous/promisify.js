// promisify is a process in which we wrap something in promise
// it helps us to promisify simple tasks or callbacks base things so we can use then and catch chain
// on it and make our code reusable and more readable
// mostly we promisify callback base functions or other promise
// by promisify callback base function we can make it more readable 
// and by promisify promise we can do extra tasks on promise response and then return new promise
// so we can also chain that response elsewhere


// promisify setTimeout
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000)
    })
}


wait(1)
    .then((res) => {
        console.log('1 second pass');
        return wait(1)
    })
    .then((res) => {
        console.log('2 second pass');
    })
    .catch((err) => console.log(err))
// what we are doing hear is we create new function called wait and return new promise from function
// so whoever calls function will get promise which will resolve or reject in future
// now promise need callback so we provide that and inside callback we will do what we want
// to do in function and hear its using setTimeout and setTimeout also need callback
// so we provide resolve to it so when time finishes resolve will called 
// important thing to note hear is that mostly we call resolve inside promise callback
// by our own but hear we just pass it to setTimeout so after time up function can call
// resolve and our promise resolve automatically



let resData = {}
let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                resData = res
                return res.json()
            })
            .then((res) => {
                if (resData.status < 399) {
                    resolve({
                        status: resData.status,
                        url: resData.url,
                        ok: resData.ok,
                        data: res
                    })
                }
                else {
                    reject({
                        status: resData.status,
                        url: resData.url,
                        ok: resData.ok,
                        data: res
                    })
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}



fetchData('https://restcountries.eu/rest/v2/name/india')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.error(err))
// hear we are creating our own promise to replicate axios functionality
// like axios we provide all response in catch except 200 + and 300 - 
// because fetch give 404 and all other err response in then 
// and we also converting data to json from readableStreem
// so like this we can also promisify promise to do some common task on every promise response

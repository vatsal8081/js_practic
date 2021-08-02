// Global promise object have some combinator function which we can use


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

// Promise.all()
// many times we want to execute multiple promisees at same time and if we call it in same func
// then we have to put await before that so it will execute one by one
// but hear no any request are depended on each other so we can call them same time to save time
// promise.all() take array of promises and return single promise when all resolve which will be array of all promise response
// one thing to note hear is if any of promise reject then all function will short circuit immediately
// that means if any of promise reject then hole all will be rejected

try {
    let res = await Promise.all([
        fetchData('https://restcountries.eu/rest/v2/name/india'),
        fetchData('https://restcountries.eu/rest/v2/name/italy'),
        fetchData('https://restcountries.eu/rest/v2/name/nepal'),
    ])
    console.log('res is: ', res);
}
catch (err) {
    console.log('err : ', err);
}


// Promise.allSettled is same like all only think it won't short circuit if any of promise fail
// Promise.allSettled will give you all promises wether it resolve or reject
// so we can say that allSettled will return promise which will always resolve 
try {
    let res = await Promise.allSettled([
        fetchData('https://restcountries.eu/rest/v2/name/india'),
        fetchData('https://restcountries.eu/rest/v2/name/italy'),
        fetchData('https://restcountries.eu/rest/v2/name/nepal'),
    ])
    console.log('res is: ', res);
}
catch (err) {
    console.log('err : ', err);
}


// Promise.race in this first settled promise will we return 
// so Promise.race will take multiple promises and return only one which will we settled
// now settled means no matter it's rejected or resolved first rejected or resolved promise will return
try {
    let res = await Promise.race([
        fetchData('https://restcountries.eu/rest/v2/name/india'),
        fetchData('https://restcountries.eu/rest/v2/name/italy'),
        fetchData('https://restcountries.eu/rest/v2/name/nepal'),
    ])
    console.log('res is: ', res);
}
catch (err) {
    console.log('err : ', err);
}


// Promise.any is same like race the only difference is race will give first settled promise
// where any will give first resolved promise
// and only give reject if all promise will rejected
try {
    let res = await Promise.any([
        fetchData('https://restcountries.eu/rest/v2/name/india'),
        fetchData('https://restcountries.eu/rest/v2/name/italy'),
        fetchData('https://restcountries.eu/rest/v2/name/nepal'),
    ])
    console.log('res is: ', res);
}
catch (err) {
    console.log('err : ', err);
}



Promise.resolve('resolved promise')
// to quickly generate promise which will always resolve
// also can use inside promise to resolve current promise manually
Promise.reject('rejected promise')
// to quickly generate promise which will always reject
// also can use inside promise to reject current promise manually





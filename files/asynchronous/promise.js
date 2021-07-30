// a promise is container for future value of ajax call
// because of promise we can save our selfs from callback hells
// and we can also chain promises to execute tasks in sequence
// a promise has own lifecycle in 
// - first when asynchronous tasks is running in background a promise will be in pending state
// - when task is finish the promise will be in settled state
// - after settled the promise will can be fulfilled or rejected
//  a promise is fulfilled when we get response from server (no matter success or err response)
//  a promise is rejected when we not able to perform asynchronous task (not bale to do ajax call) 


// Note : keep one thing in mind that fetch will only reject promise when there is no
// internet connection so fetch will only go in catch when there is no internet connection
// all server errors like 400, 404, 500 are consider as success response from fetch so
// all this type of response will also go to then block

// when we use axios then it's not a case all error responses like 400, 404, 500 will
// be consider as rejection and go in catch block and only success responses like 
// 200, 201 will be consider as resolved and go to then

// so that's why to easily handle every response weather it's success or failure from
// server, so we give success response every time weather it's success or failure and
// pass another status key in response so we can handle every type of response in then block   

const req = fetch('abc.com')
console.log(req);
// by this we can see the req is promise


fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => console.log('res is', res))
// in this example we are using browser's builtin fetch api which will return promise
// so we can use then to do things after promise will resolve
// the then function will execute callback after promise will resolve
// and the response will be in stream format so we have to convert it to json
// and json is also asynchronous task so it will also return promise
// so we can return that promise and catch it in other then which will execute 
// after promise will resolve and we will have data  


fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => res[0])
    .then((res) => console.log(res))
// its not necessary to always return promise from then and only use it to catch promise
// like in above we return first object from res and can catch it in other then 

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then()
    .then((res) => console.log(res))
// if we don't return anything then then method will return current promise
// and it will be value for next then 
// and if we return something form then then it will be value for next then
// like above example we don't return anything then next then will get promise which is response.json from above



fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => res.json())
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => res.json())
    .then((res) => console.log('second res', res))
// many time it happen that we want to execute ajax requests in sequence
// because one api depends on others response
// and in this type of cases there is very good possibility of callback hell
// so to avoid that what we do is return other promise from then after response come
// like we return fetch above because fetch will return promise so at end we are returning a new promise
// we can catch it in other then block so now we don't need nested callbacks  



// handling promise rejections  
// there are 2 ways we can handle promise rejection 
// first is we can provide second callback to then which is for to handle rejections in promises
// other way is to use catch in promise to handle promise rejections

// using other callback


fetch('https://restcountries.eu/rest/v2/name/india')
    .then(
        (res) => res.json(),
        (err) => console.log(`err in first step. ${err.message}`))
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then(
        (res) => res.json(),
        (err) => console.log(`err in second step. ${err.message}`)
    )
    .then((res) => console.log('second res', res))

// as we can see we can provide every then it's onw err handling function
// every function will handle it's promise rejection
// this can be useful some times but there are some problems

// - handling promise rejection like this makes code massy and less readable
// - hear we using then because our requests are depended on each other and
//  if one fails then there is no reason to execute other because depended on 
//  parent one's response but by handling err like that if one fails then 
// it also go to other then
// many times when we are chening the then blocks to do things in sequence so
// if any error acor in any step we want to catch it in one place but hear
// to catch err in any step we have to put callback to every block which is not good

//  we can solve this problems with catch


fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => res.json())
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => res.json())
    .then((res) => console.log('second res', res))
    .catch((err) => console.error(`something went wrong ${err.message}.`))

// like this we can use catch in promise to handle promise rejections
// it's more readable and if in any step our promise will reject then other thens will not execute
// and now we can catch any promise rejection in any step in one central place
// catch will provide err object so we can use it to show message and other stuff
// and important to know that catch will also return promise by default like then
// so we can use it in finlay block.


fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => res.json())
    .catch((err) => console.error(`something went wrong in first step ${err.message}.`))
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => res.json())
    .catch((err) => console.error(`something went wrong in second step ${err.message}.`))
    .then((res) => console.log('second res', res))

// like this we can also use catch for different then blocks
// but when we do this then our execution won't stop when there is promise rejected in any step
// like it do in single catch for all then
// and using septate catch block for every then is not consider as good practice so we should avoid this



fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => res.json())
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => res.json())
    .then((res) => console.log('second res', res))
    .catch((err) => console.error(`something went wrong ${err.message}.`))
    .finally(() => console.log('finally called'))
// we can use finally in promise it will be execute no matter promise will reject or resolve
// then and catch both return promise by default so finally can use it
// and we can do tasks which should always happen like stopping loading bar  




// handling errors
fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => {
        if (res?.status !== 200) {
            throw new Error('Country not found.')
        }
        return res.json()
    })
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => {
        if (res?.status !== 200) {
            throw new Error('neighbour country not found.')
        }
        return res.json()
    })
    .then((res) => console.log('second res', res))
    .catch((err) => console.error(`something went wrong ${err.message}.`))
// like this we can use throw method to throw error
// when we throw error then a promise will immediately reject and we can catch it in catch block with given error
// it's good practice to throw and catch errors if the response we want is not proper
// by just putting catch block we can catch all possible errors that may occur in any api call

// NOTE: if we provide status in our response and we use that in our frontend then
// we should always provide main response as 200 and give error status in response data
// we should provide 200 as main status waterer it's success, unauthenticated, validation err
// etc we provide 200 as main status and actual status in response body status 
// only 500 status should be aloud as main status other then 200 because it's not in
// our hand 

//  by this what we can achieve in frontend is we can create global interceptor in axios
// so we can catch 500 error and in 200 we continue
// and in our component's then block we can check for success status code in response body
// if we don't have success response in response body status then we can handle it in then block
// or we can throw new error to catch it in else block




fetch('https://restcountries.eu/rest/v2/name/india')
    .then((res) => {
        if (res?.status !== 200) {
            return Promise.reject(new Error('Country not found.'))
        }
        return res.json()
    })
    .then((res) => {
        console.log('first res ', res)
        const npealCode = res[1].borders[5]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${npealCode}`)
    })
    .then((res) => {
        if (res?.status !== 200) {
            return Promise.reject(new Error('neighbour country not found.'))
        }
        return res.json()
    })
    .then((res) => console.log('second res', res))
    .catch((err) => console.error(`something went wrong ${err.message}.`))
// listed of throwing new error we can reject promise and can throw err inside it if we want
// or just reject promise with custom data or object
// catching promise like this is more useful then just throwing err
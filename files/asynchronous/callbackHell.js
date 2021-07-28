// callback hell happens in code when we try to execute multiple operations one after other
// by nesting then in callbacks
// because of nested callbacks our code become less readable and more complex
// we can easily identify callback hells when in one callback we do other callback then 
// it starts to create callback hell, and it also easily identify by nested structure it make in editor
// callback hell mostly happen when we do nested api calls when one request depend on other
// requests response and also happen when function accepting callbacks and we do nested 
// callbacks in it


// api call callback hell

// as you can see this is creating callback hell
// every request is depend on parent requests response so we are nesting callbacks
// this code is already become less readable and in real world we add lots of logic
// inside callbacks so it will be more unreadable 
request.call('abc/1', (res) => {
    let name = res.name

    request2.call(`abc/${name}`, (res) => {
        let surname = res.surname

        request3.call(`abc/${surname}`, (res) => {
            console.log(res);
        })
    })
})



// synchronous callback hell
// callback hell also happen in synchronous code as well
// in short when we put callback inside callback then it's callback hell

setTimeout(() => {
    console.log('1 second pass.');
    setTimeout(() => {
        console.log('2 second pass');
        setTimeout(() => {
            console.log('3 second pass');
        }, 1000)
    }, 1000)
}, 1000)


[[1], [2, 2], [3, 3, 3]].map((el) => {
    el.map((elem) => {
        console.log('elem is', elem);
    })
})



// now as we have problem we have solutions too
// we will discuss grate solution introduce in ES6 called Promises letter
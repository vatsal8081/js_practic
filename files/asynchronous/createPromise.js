// version 1
const lottery = new Promise((resolve, reject) => {
    const random = Math.random();
    console.log(random);
    random > 0.5
        ? resolve({ msg: 'you win.', random })
        : reject({ msg: 'you louse', random })
})

lottery
    .then((res) => console.log(res.msg))
    .catch((err) => console.log(err.msg))

// version 2
const lottery = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log(random);
        random > 0.5
            ? resolve({ msg: 'you win.', random })
            : reject({ msg: 'you louse', random })
    })
}

lottery()
    .then((res) => console.log(res.msg))
    .catch((err) => console.log(err.msg))

// what is a difference between version 1 and version 2
// so in version 1 we are assigning a promise to variable so it will execute once only
// and in version 2 we are returning new promise every time we execute a function so
// when we do this

lottery
    .then((res) => {
        console.log(res);
        return lottery
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
// in version 1 then return lottery in then will not create new promise instead it will return same promise
lottery()
    .then((res) => {
        console.log(res);
        return lottery()
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
// but when we do this in version 2 then it will return new promise from then every time we do that

// hear we create new promise with new Promise constructor
// new constructor will take only one argument which is callback 
// now in callback promise provide 2 params which is resolve and reject function
// it's our responsibility to call one of them to complete promise
// we can do any task inside callback and base on this we can run resolve or reject
// mainly we do asynchronous tasks inside the promise callback and after result come
// base on result we resolve or reject promise 
// but it's not true that we can only use promise in asynchronous tasks only we can use
// it in synchronous tasks as well
// basically we create promise for tasks where we want to do things in sequence
// now after creating promise we can use it as many times as we want and can use then
// and catch to handle resolve or reject


lottery()
    .then((res) => {
        console.log(res.msg);
        return lottery()
    })
    .then((res) => {
        console.log(res.msg);

        return fetch('https://sahdkjhjsk')
    })
    .then((res) => res.json())
    .then((res) => console.log('final', res))
    .catch((err) => console.log(err.msg))

// now like this we can chain promises to execute it in sequence
// and also can use same promise multiple times



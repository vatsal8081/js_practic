// in js function can also return another function as well


function one(name){
    return function printIt(str){
        console.log('one', name, 'printIt', str);
    }
}



let fn = one('hello')
fn('man')


one('hey')('man')


let fnAr = (name) => (str) => console.log('one', name, 'printIt', str);
fnAr('yo')('man')
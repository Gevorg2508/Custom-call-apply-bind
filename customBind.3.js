function myBind(cb, context){
    return function(...args){
        return cb.apply(context, args);
    }
}
function myFunc(a, b){
    return `${this.num}, ${a}, ${b}`;
}
const obj = {
    num: 3,
}
const originalBind = myFunc.bind(obj);
const fakeBind = myBind(myFunc, obj);
console.log(fakeBind());

// function customBind(cb, context){
//     return function(...args){
//         return cb.apply(context, args);
//     }
// }
// function func(a, b){
//     return `${this.name} ${a} ${b}`;
// }
// const obj = {
//     name: "Gevorg",
// }
// let original = func.bind(obj);
// let custom = customBind(func, obj);
// console.log(original());
// console.log(custom());
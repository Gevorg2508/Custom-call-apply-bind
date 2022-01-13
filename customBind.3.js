// Function.prototype.customBind = function customBind(obj, ...args) {

//     return function func() {
//         obj._this = this;
//         obj.args = args
//         return func.call(obj, args);
//     }
// }
// function fn(){
//     console.log(this.name);
// }

// let obj = {
//     name: "Gevorg",
// }
// let func1 = fn.bind(obj, 1, 2, 3, 4);
// let func2 = fn.customBind(obj, 1, 2, 3, 4);
// func1();
// func2();

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
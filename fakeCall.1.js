Function.prototype.customCall = function customCall(self, ...rest) {
    self._fn = this;
    // prop descriptors
    return self._fn(...rest);
}

function fn() {
    console.log(this.name);
}

const user = {
    name: "Vrejh",
}

fn.call(user, 1, 2, 3);
fn.customCall(user, 1, 2, 3);


// Function.prototype.customCall = function customCall(self, ...args){
//     self._fn = this;
//     return self._fn(args);
// }
// function fn(){
//     console.log(this.name);
// }
// const obj = {
//     name: "Gevorg",
// }
// fn.call(obj,1 ,2 ,3, 4);
// fn.customCall(obj, 1, 2, 3, 4);

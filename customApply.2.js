Function.prototype.customApply =  function customApply(self, rest) {
    self._fn = this;
    // prop descriptors
    return self._fn(rest);
}

function fn(){
console.log(this.name);
}

const user = {
name: "Vrejh",
}
fn.apply(user, [1, 2, 3]);
fn.customApply(user, [1, 2, 3]);


// Function.prototype.customApply = function customApply(self, rest){
//     self._fn = this;
//     return self._fn(rest);
// }
// function fn (){
//     console.log(this.name);
// }
// const obj = {
//     name: "Gevorg",
// }
// fn.apply(obj, [1,2,3,4]);
// fn.customApply(obj, [1,2,3,4]);
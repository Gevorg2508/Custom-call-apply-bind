function User(name){
     this.name = name;
    return [1, 2, 3];
}

function fakeNew(construct, ...rest){
    const obj = {};
    obj.__proto__ = construct.prototype;
    const returnValue = construct.apply(obj, rest);
    if(typeof returnValue === "object"){
        return returnValue;
    }
    return obj;
}
const user = new User("Vrejh");
const user1 = fakeNew(User, "Vrejh");

console.log(user);
console.log(user1);
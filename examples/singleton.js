// const simple = {
//     a: 1,
//     b: 2
// };

// const anotherSimple = simple;
// console.log(anotherSimple, anotherSimple === simple);

function Singletone() {
    if (this.__proto__.instance) return this.__proto__.instance;

    this.name = 'Bob';
    this.__proto__.instance = this;
    return this.__proto__.instance;
}
const withProto = new Singletone();
const withProto1 = new Singletone();
console.log(withProto, withProto1, withProto === withProto1);


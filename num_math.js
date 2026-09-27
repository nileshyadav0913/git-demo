const score = 400;

console.log(score);

// Other way of initialization of Number (creates a Number object)
const balance = new Number(100);

console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2));



//     that labrary is default in java script


console.log(Math.abs(-4));
console.log(Math.round(3.3));
console.log(Math.ceil(6.6));
console.log(Math.floor(6.6));


console.log(Math.random());//between 0 to 1
console.log(((Math.random())*10)+1)


const  min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)

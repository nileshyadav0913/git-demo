// const user = {
//     username: "nilesh",
//     price: 777,

//     welcomMassage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(This)
//     }
// }

// user.welcomMassage();
// user.username="happy"
// user.welcomMassage();
// console.log(This)


//this key word is not us in the function
// function happy(){
//     let username="mahesh";
//     console.log(this.username);
    
// }
// happy()




//      arrow function    // htis function can not use

// const happy=()=>{
//     let username="mahesh";
//     let  price=23
    
// }
// happy()


// const addTwo=(num1 ,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// implicit return in arrow function

const addTwo = (num1, num2) => num1 + num2;// ek  hi line me return karne ke liye use hota hai  bina return likhe
console.log(addTwo(3, 4));// object can not return implicitly

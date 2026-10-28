// //this batata hai ki hum kis object ki properties ko access kar rahe hain.
// const user = {
//     username: "nilesh",
//     price: 777,

//     welcomMassage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomMassage();
//  user.username="happy"
//  user.welcomMassage();
// if this key word ko print karne se empty object aa raha hai to iska matlboh iska matlab hai ki this ek empty object ko refer kar raha hai.
// console.log(this); 


// this key word is not us in the function
// function happy(){
//     let username="mahesh";
//     console.log(this.username);
    
// }
// happy()




//      arrow function    // htis function can not use

// kay ek normal funtion ko kisi dusare variable me store karke phir us varible ka us karke us funtion ko call kar skte hai "answer is "YES"

const happy=()=>{
    let username="mahesh";
    let  price=23
    
}
happy()


// const addTwo=(num1 ,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// implicit return in arrow function

//      Explicit Return                           Implicit Return
//     return keyword likhna padta hai.           return keyword nahi likhna padta.
//     {} braces use kar sakte hain.              Single expression ke liye braces nahi lagate.
//      Multiple statements likh sakte hain.      Directly ek expression return karte hain.


// const addTwo = (num1, num2) => num1 + num2;// ek  hi line me return karne ke liye use hota hai  bina return likhe
// console.log(addTwo(3, 4));// object can not return implicitly
